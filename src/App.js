import React from 'react';
import me from './images/me.jpg'
import Navbar from './components/Navigation/index'
import './App.css';


function App() {
    return (
        <div className='App'>
            <Navbar />

            <img src={me}  alt="my-image"/>
  

        </div>
    )
}

export default App
