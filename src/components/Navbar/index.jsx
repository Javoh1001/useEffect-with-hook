import React from 'react';
import { Nav,Logo} from './style'
import {Link } from 'react-router-dom'

export default class Navbar extends React.Component{
   render(){
        return(
            <>
               <Nav>
                   <Logo>
                       <Link to="/">Logo</Link>
                   </Logo>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/contacts">Contacts</Link></li>
                        </ul>
               </Nav>
            </>
        )
   }
}