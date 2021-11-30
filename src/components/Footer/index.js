import React from 'react';
import './style.css';


function Footer () {
    return (
    <div className='footer'>
        <h3>Links</h3>
        <div className='footerLinks'>
            <a href='https://github.com/umeramalek' className="fab fa-github" rel='noreferrer' target="_blank">Github</a>
            <a href='https://www.linkedin.com/in/umeramalek/' className="fab fa-linkedin" rel='noreferrer' target="_blank">LinkedIn</a>
            <a href='https://medium.com/@umeramalek796' className="fab fa-medium" rel='noreferrer' target="_blank">Medium</a>
            
        </div>
    </div>
    )
}

export default Footer;