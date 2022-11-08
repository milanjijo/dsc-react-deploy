import React from 'react';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {AboutPage,HomePage} from './pages'
import ScrollToTop from './utils/ScrollToTop';
import {Navbar} from './components'
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
