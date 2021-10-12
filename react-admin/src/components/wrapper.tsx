import axios from 'axios';
import React,{Component, useEffect, useState} from 'react';
import { Redirect } from 'react-router';
import Menu from './menu';
import Nav from './nav';

//class Wrapper extends Component
const Wrapper = (props:any) => {
  const [redirect,setRedirect] = useState(false);
   // render()
   useEffect(()=>{
    (
        async()=>  {
          try
          {
            const{data} = await axios.get('user');
           // setUser(data);
          }
          catch(e)
          {
            setRedirect(true);
          }
           
           
        }
        )();
    },[]);

    if(redirect)
    {
        return <Redirect to="/login"/>
    }

  
        return (
          <>
          <Nav />

          <div className="container-fluid">
            <div className="row">
              <Menu />
          
              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
               {props.children}
                 
              </main>
            </div>
          </div>
          </>
            
        )


    }

export default Wrapper;



