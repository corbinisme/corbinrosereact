import React, { Component, useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import {
    useLocation,
    useNavigate,
    useParams,
  } from "react-router-dom";

export default function Navigation (props){

    const pathname=""; 
    const changePage = props.changePage
    const navclass = (props.navclass?props.navclass:"");
    
    /*
    useEffect(() => {
        // code to run on component mount
            const thisPageItem = (menu? menu.filter(t=>t.attributes.url==location.pathname): []);
            setThisPage(thisPageItem);
            
    }, [menu]);
    */


    return (
       
          
        <ul className={`${navclass} me-auto mb-2 mb-lg-0`}>


            {props.menu.map(item=>{

                const isCurrent = (props.page.indexOf(item.url)>-1?"active":"");
                return(
                 <li className={`nav-item ${isCurrent}`} key={item.name}>
                    <Link 
                        to={item.url}
                        onClick={()=>{props.changePage(item.url)}}
                        className={`nav-link ${isCurrent}`} >
                        {item.name}
                    </Link>
                </li>
                )
            })}
            
        </ul>
              
       
    );

}