import React from 'react';
import img from './laptop.jpg';
import './style.css'

export default function Home() {
    const imageStyle = {
      width: '100%',
      maxWidth: '100%',
    };

    return (
        <div href="/Home">
          <div >
            <img src={img} alt='me' style={imageStyle}></img>
          </div>
        </div>
  );
}