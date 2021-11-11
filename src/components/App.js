import React from 'react';
import Navbar from './Navbar'
import About from './About';
import Blogs from './Blogs';
import Contacts from './Contacts';
import Home from './Home';
import Portfolio from './Portfolio';
import {Routes,Route, BrowserRouter as Router} from 'react-router-dom';

const App = () => {
  return(
    <Router>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path="/contacts" element={<Contacts />} />
        </Routes>
    </Router>
  )
}

export default App;
