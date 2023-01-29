import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom' // IMRR router and browser router are same
import Menu from './Component/Menu';
import Music from './Component/Music';
import Pnf from './Component/Pnf';
import Track from './Component/Track';







function App() {
  return (
    
    <Router> 
       <Menu/>
       <Routes>
      <Route path={'/'} element={<Music/>}/>
      <Route path={'/music'} element={<Music/>}/>
      <Route path={`/tracks/:id`} element={<Track/>}/>
      <Route path={'/*'} element={<Pnf/>}/>




      </Routes>
    </Router>
  
  );
}

export default App;
