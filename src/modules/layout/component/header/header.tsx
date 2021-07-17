
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './header.scss';
interface Props {
}

export default function Header(props: Props) {





return (
   <>
<header id="header" className="inner_header">
   <div className="inner_header">
     <figure className="Logo"> 
            FSA
     </figure>  
    <ul  className="center_nav">
                <li>
                <Link to="/">Payments</Link>
                </li>
                <li>
                <Link to="/">Transaction History</Link>
                </li>
                <li>
                <Link to="/">Data</Link>
                </li>
            </ul>
            <div className="profile_nav">
            <Link to="/"> Logout</Link>
            </div>
   </div>

   
    
</header>

</>
)
}