import React from 'react'
import Header from './components/Header'
import Project from './components/Project'
import {Github,Linkedin, Medium} from './Icon';

function App ()  {
    
    const Header = () =>
    return (
        <div>
            <Header/>
            <Project/>
        </div>
    );


const Icons = () => [
        {
            icon: <Github />,
            link: 'https://github.com/umeramalek',
        },
        {
            icon: <Linkedin />,
            link: 'https://www.linkedin.com/in/umeramalek/',
        },
        {
            icon: <Medium />,
            link: 'https://medium.com/@umeramalek796',
        },
    ];
    
    return (
        <div
            style={{
              width: '100vw',
              height: '50px',
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              background: '#424242',
              color: 'white',
              position: 'fixed',
              top: '0px',
              zIndex: '666',
            }}>
    
          </div>
    )
}


const Icons = () => [
    {
        icon: <Github />,
        link: 'https://github.com/umeramalek',
    },
    {
        icon: <Linkedin />,
        link: 'https://www.linkedin.com/in/umeramalek/',
    },
    {
        icon: <Medium />,
        link: 'https://medium.com/@umeramalek796',
    },
];

return (
    <div
        style={{
          width: '100vw',
          height: '50px',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          background: '#424242',
          color: 'white',
          position: 'fixed',
          top: '0px',
          zIndex: '666',
        }}>

      </div>
)




export default App;
