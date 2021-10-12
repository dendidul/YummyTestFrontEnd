import React,{Component} from 'react';
import {Link} from 'react-router-dom';


class Menu extends Component{
    render()
    {
        return (
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                     <div className="position-sticky pt-3">
                    <ul className="nav flex-column">
                    
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link">
                                Products
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link to={'/productinfinite'} className="nav-link">
                                Product Infinite loop 
                            </Link>
                        </li>
                        
                     </ul>
            
                    
                    </div>
                 </nav>
        )
    }

    }

    export default Menu;

// const Menu=()=> {
// return
//     (
//         <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
//         <div className="position-sticky pt-3">
//         <ul className="nav flex-column">
        
//             <li className="nav-item">
//             <a className="nav-link" href="#">
//                 <span data-feather="shopping-cart"></span>
//                 Products
//             </a>
//             </li>
            
//         </ul>

        
//         </div>
//     </nav>
//     )

// }
//export default Menu;