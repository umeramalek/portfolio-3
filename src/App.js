
import React, { useState, createContext } from 'react';
import 
import Header from './components/Header'
import Project from './components/Project'
import {Github,Linkedin, Medium} from './Icon';

export const pageChange = createContext();

function App() {

    const [currentPage, setPage] = useState('About');

    const renderChange = () => {
        switch (currentPage) {
          default: return <Home />;
          case 'projects': return <Project />;
          case 'contact': return <Contact />;
          case 'about': return <AboutMe />;
        }
      }
export const App = () => {
    return (
        <div>
            <Header/>
            <Project/>
       
        </div>
    )
}


// function App ()  {
    
//     const Header = () =>
//     return (
//         <div>
//             <Header/>
//             <Project/>

//         </div>
//     );


// const Icons = () => [
//         {
//             icon: <Github />,
//             link: 'https://github.com/umeramalek',
//         },
//         {
//             icon: <Linkedin />,
//             link: 'https://www.linkedin.com/in/umeramalek/',
//         },
//         {
//             icon: <Medium />,
//             link: 'https://medium.com/@umeramalek796',
//         },
//     ];
    
//     return (
//         <div
//             style={{
//               width: '100vw',
//               height: '50px',
//               display: 'flex',
//               justifyContent: 'space-evenly',
//               alignItems: 'center',
//               background: '#424242',
//               color: 'white',
//               position: 'fixed',
//               top: '0px',
//               zIndex: '666',
//             }}>
    
//           </div>
//     )
// }


// const Icons = () => [
//     {
//         icon: <Github />,
//         link: 'https://github.com/umeramalek',
//     },
//     {
//         icon: <Linkedin />,
//         link: 'https://www.linkedin.com/in/umeramalek/',
//     },
//     {
//         icon: <Medium />,
//         link: 'https://medium.com/@umeramalek796',
//     },
// ];

// return (
//     <div
//         style={{
//           width: '100vw',
//           height: '50px',
//           display: 'flex',
//           justifyContent: 'space-evenly',
//           alignItems: 'center',
//           background: '#424242',
//           color: 'white',
//           position: 'fixed',
//           top: '0px',
//           zIndex: '666',
//         }}>

//       </div>
// )

export default App;
