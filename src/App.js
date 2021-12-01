import './App.css';
import React, { useState, createContext } from 'react';
import Navbar from './components/Navigation/index';
import About from './components/About';
import Projects from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

export const pageChange = createContext();

function App() {

  const [currentPage, setPage] = useState('About');

  const renderChange = () => {
    switch (currentPage) {
      default: return <About />;
      case 'Projects': return <Projects />;
      case 'Contact': return <Contact />;
      // case 'Resume': return <Resume />;
      case 'About': return <About />;
    }
  }

 const handleChange = (page) => {
    setPage(page);
  }
  
  return (
    <div>
    {/* // <pageChange.Provider value={{ currentPage, handleChange }}> */}
        <Navbar handleChange={handleChange} />
        <div>
          {renderChange()}
        </div>
        <div>
          <Footer />
        </div>
    </div>

    // </pageChange.Provider>
      

  );
};



export default App;






// import React from 'react';
// import me from './images/me.jpg'
// import Navbar from './components/Navigation/index'
// import './App.css';



// function App() {
//     return (
//         <div className='App'>
//           <Navbar />
  

//         </div>
        
//     )
// }

// export default App
