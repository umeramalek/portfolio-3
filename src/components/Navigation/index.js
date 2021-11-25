import React, { Component } from 'react'
import {MenuBar} from './MenuBar'
import "./style.css"

class Navigation extends Component {
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React <i className="fab fa-react"></i> </h1>
                <div className="menu-icon">
                
                </div>
                <ul>
                    {MenuBar.map((item,index) => { 
                        return(
                        <li key={index}> <a className ={item.cName} href={item.url}> {item.title} </a> </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}


export default Navigation
