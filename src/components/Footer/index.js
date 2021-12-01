import React from 'react';
import './style.css';


function Footer () {
    return (
    <footer className="footer text-center" > 
        <div className="container">
            <div className="row">
                <div className=" text-center text-black ">
                    <h4 class="text-uppercase mb-4">Around the Web</h4>
                    <div className='footerLinks'>
                        <a className="btn btn-outline-dark btn-social mx-1" href="mailto:umeramalek796@gmail.com!" target="_blank"><i className="fas fa-envelope-square"></i></a>
                        <a className="btn btn-outline-dark btn-social mx-1" href="https://www.linkedin.com/in/umeramalek/" target="_blank"><i class="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-dark btn-social mx-1" href="https://github.com/umeramalek" target="_blank"><i class="fab fa-github"></i></a>
                        <a className="btn btn-outline-dark btn-social mx-1" href="https://medium.com/@umeramalek796" target="_blank"><i class="fab fa-medium"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;
