import React, { useState } from 'react';
import { menuBars } from "./menuBars";

import './style.css'

 const Navbar = (props) => {
    // state = { clicked: false }
    const [state, setState] = useState('');
    console.log(props)

    const handleClick = () => {
        setState({ clicked: !state.clicked })
    }
        return(
            <nav className="navbar">
                <h1 className="navbar-logo" onClick={()=> props.handleChange('About')}>Umera Malek <i className="fab fa-react"></i></h1>
                <div className="menu-items" onClick={handleClick}>
                    <i className={state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={state.clicked ? 'menu-nav active' : 'menu-nav'}>
                    {menuBars.map((item, index) => {
                        return (
                            <li key={index}>
                                <span onClick={() => props.handleChange(item.title)} className={item.name}>
                                {item.title}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    
}

export default Navbar
