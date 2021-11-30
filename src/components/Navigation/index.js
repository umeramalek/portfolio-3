import React, { Component } from 'react';
import { menuBars } from "./menuBars"
import './style.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="navbar">
                <h1 className="navbar-logo">Umera Malek<i className="fab fa-react"></i></h1>
                <div className="menu-items" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'menu-nav active' : 'menu-nav'}>
                    {menuBars.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.name} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar
