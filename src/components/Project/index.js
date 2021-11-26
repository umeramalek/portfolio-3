import React from 'react'
import "./style.css"

const Project = () => {
    return (
        <div className="image" href="/Projects">
            <img className="image__img" src="" alt="Bricks"/>
            <div className="image__overlay image__overlay--primary">
            <div className="image__title">Investomania</div>
            <p className="image__description">
                Investomania a pre production crowdfunding application that would allow users to see what kind of support they would recieve before crowdfunnding their project/application.
            </p>
        </div>
            <img className="image__img" src="" alt="Bricks"/>
            <div className="image__overlay image__overlay--primary">
            <div className="image__title">Tech Blog</div>
            <p className="image__description">
                Tech blog is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.
            </p>
            </div>

            <img className="image__img" src="" alt="Bricks"/>
            <div className="image__overlay image__overlay--primary">
            <div className="image__title">Team Profile Generator</div>
            <p className="image__description">
                This is a Node js command line application that takes in information on about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.
            </p>
            </div>

            <img className="image__img" src="" alt="Bricks"/>
            <div className="image__overlay image__overlay--primary">
            <div className="image__title">Offline Budget Tracker</div>
            <p className="image__description">
                Budget Tracking app that can be used online or offline. This app is also a Progressive Web Application (PWA) which allows user's to download it to their device. The user will be able to add expenses and deposits to their budget with or without a connection.
            </p>
            </div>

            <img className="image__img" src="" alt="Bricks"/>
            <div className="image__overlay image__overlay--primary">
            <div className="image__title">Note Taker</div>
            <p className="image__description">
                Notes Taker is a full stack application which allows the user to create and save a new note. Once the note is saved it appears on the left panel. User also has an option to delete a note.
            </p>
            </div>

            <img className="image__img" src="" alt="Bricks"/>
            <div className="image__overlay image__overlay--primary">
            <div className="image__title">EzVibez</div>
            <p className="image__description">
                EzVibez was built with Foundation, Particle js, Lyrics.ovh , Tastedive, and Meaningcloud. Our site queries multiple apis in order to deliver lyrics and a polarity analysis for them. Our users will be able to view the lyrics on a dynamic and fun website which will offer artist recommendations and a search history saved in lcoal storage.
            </p>
            </div>

        </div>

    )
}

export default Project
