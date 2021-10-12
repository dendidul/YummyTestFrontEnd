import React,{Component} from 'react';
import Wrapper from '../components/wrapper';

class Users extends Component{
    render()

    {
        return (
            <Wrapper>
            <div className="table-responsive">
                 <br/>
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First Name</th>
                  <th scope="col">LastName</th>
                  <th scope="col">email</th>
                
                 
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1,001</td>
                  <td>random</td>
                  <td>data</td>
                  <td>placeholder</td>
                 
                  
                </tr>
               
              
              </tbody>
            </table>
          </div>
          </Wrapper>
        )
    }

    }

    export default Users;



