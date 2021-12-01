import React from 'react'
import budget from './budget.jpeg';
import investomania from './investomania.png';
import music from './music.png';
import note from './note.png';
import team from './team.jpeg';
import  tech from './tech.jpeg';

import "./style.css"

export default function Project() {
    const imageStyle = {
      width: '70vw',
      maxWidth: '400px',
    };

    return (
        <div className="image" href="/Projects">
            <img className="image__img" src={investomania} style={imageStyle}/>
            <div>
            <div className="image__title">Investomania</div>
            <a className="btn btn-outline-dark btn-social mx-1" href="https://github.com/umeramalek/investomania" target="_blank"><i class="fab fa-github"></i></a>
            <a className="btn btn-outline-dark btn-social mx-1" href="investomaniap2.herokuapp.com/ " target="_blank"><i class="fab fa-browser"></i></a>
            <p className="image__description">
                Investomania a pre production crowdfunding application that would allow users to see what kind of support they would recieve before crowdfunnding their project/application.
            </p>
        </div>
            <img className="image__img" src={tech} style={imageStyle} />
            <div >
            <div className="image__title">Book Search</div>
            <a className="btn btn-outline-dark btn-social mx-1" href="https://github.com/umeramalek" target="_blank"><i class="fab fa-github"></i></a>
            <a className="btn btn-outline-dark btn-social mx-1" href="https://stark-sands-59831.herokuapp.com/" target="_blank"><i class="fab fa-browser"></i></a>

            <p className="image__description">
                Book Search engine is a fully functioning Google Books API search engine built with a RESTful API. The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. It's set up to allow users to save book searches and access the saved ones by logging in/signing up.
            </p>
            </div>

            <img className="image__img" src={team} style={imageStyle} />
            <div >
            <div className="image__title">Team Profile Generator</div>
            <a className="btn btn-outline-dark btn-social mx-1" href="https://github.com/umeramalek" target="_blank"><i class="fab fa-github"></i></a>
            <a className="btn btn-outline-dark btn-social mx-1" href="https://umeramalek.github.io/team-profile-generator/ " target="_blank"><i class="fab fa-browser"></i></a>
            <p className="image__description">
                This is a Node js command line application that takes in information on about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.
            </p>
            </div>

            <img className="image__img" src={budget} style={imageStyle} />
            <div >
            <div className="image__title">Offline Budget Tracker</div>
            <a className="btn btn-outline-dark btn-social mx-1" href="https://github.com/umeramalek" target="_blank"><i class="fab fa-github"></i></a>
            <a className="btn btn-outline-dark btn-social mx-1" href="https://powerful-eyrie-62782.herokuapp.com/ " target="_blank"><i class="fab fa-browser"></i></a>

            <p className="image__description">
                Budget Tracking app that can be used online or offline. This app is also a Progressive Web Application (PWA) which allows user's to download it to their device. The user will be able to add expenses and deposits to their budget with or without a connection.
            </p>
            </div>

            <img className="image__img" src={note} style={imageStyle} />
            <div >
           
            <div className="image__title">Note Taker</div>
            <a className="btn btn-outline-dark btn-social mx-1" href="https://github.com/umeramalek" target="_blank"><i class="fab fa-github"></i></a>
            <a className="btn btn-outline-dark btn-social mx-1" href="https://umeramalek.github.io/note-taker/ " target="_blank"><i class="fab fa-browser"></i></a>

            <p className="image__description">
                Notes Taker is a full stack application which allows the user to create and save a new note. Once the note is saved it appears on the left panel. User also has an option to delete a note.
            </p>
            </div>

            <img className="image__img" src={music} style={imageStyle} />
            <div >
            <div className="image__title">EzVibez</div>
            <a className="btn btn-outline-dark btn-social mx-1" href="https://github.com/umeramalek" target="_blank"><i class="fab fa-github"></i></a>
            <a className="btn btn-outline-dark btn-social mx-1" href="https://ghmurphy2.github.io/EzVibez/ " target="_blank"><i class="fab fa-browser"></i></a>

            <p className="image__description">
                EzVibez was built with Foundation, Particle js, Lyrics.ovh , Tastedive, and Meaningcloud. Our site queries multiple apis in order to deliver lyrics and a polarity analysis for them. Our users will be able to view the lyrics on a dynamic and fun website which will offer artist recommendations and a search history saved in lcoal storage.
            </p>
            </div>

        </div>

    );
}

