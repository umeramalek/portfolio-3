import React from 'react';
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Navbar from './components/Navigation/index'
import Home from './components/Home/Home'
import './App.css';

function App() {
    const imageDetails = {
        width: 524,
        height: 650,
      };
      return (
        <Router>
          <Navbar/>
          <Route
            render={({ location }) => (
            <AnimatePresence initial={false} exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                  <Route
                    exact
                    path='/'
                    render={() => <Home imageDetails={imageDetails} />}
                  />
                </Switch>
            </AnimatePresence>
        )}
      />
    </Router>
  );
}


//     return (
//         <div className='App'>
//             <Navbar />
//             <Home />
//         </div>
//     )
// }

export default App
