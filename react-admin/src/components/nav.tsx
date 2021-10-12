import axios from 'axios';
import  React,{Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
//import { Link } from "react-router-dom";

const Nav = () =>
{
    const[user,setUser] = useState({
        firstname:''
    });

    useEffect(()=>{
        (
            async()=>  {
                const{data} = await axios.get('user');
                setUser(data);
            }
            )();
        },[]);

        const logout = async () => {
            await axios.post('logout', {});
        }

        return (        
            <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Product Master</a>

                <ul className="my-2 my-md-0 mr-md-3">
                    {/* <a className="p-2 text-white text-decoration-none" href="#">
                       
                    </a>
                    <a className="p-2 text-white text-decoration-none" href="#">
                        Sign Out
                    </a> */}
                    <Link to="/profile"
                        className="p-2 text-white text-decoration-none">{user?.firstname}</Link>
                    <Link to="/login" className="p-2 text-white text-decoration-none"
                        onClick={logout}
                    >Sign out</Link>
                </ul>
            </nav>

        );


 }

export default Nav;