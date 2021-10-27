import React from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

import AsideLeft from './Components/AsideLeft';
import Profile from './pages/Profile';

import GlobalStyles from './styles/GlobalStyles';


import './styles/global.scss'

function App() {
  return (
    <BrowserRouter>
      <AsideLeft/>
      <Routes>
        <Route path="/" element={ <Profile/> }/>
        <Route path="/:username" element={ <Profile/>  }/>
      </Routes>
      <GlobalStyles/>
    </BrowserRouter>
  );
}

export default App;
