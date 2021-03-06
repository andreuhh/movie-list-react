import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Watchlist } from './components/Watchlist';
import { Watched } from './components/Watched';
import { Add } from './components/Add';
import { Detail } from './components/Detail/Detail';
import './App.css';
import './lib/font-awesome/css/all.min.css';
import { AnimatePresence, motion } from 'framer-motion';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className="App">
    <AnimatePresence exitBeforeEnter >
      <GlobalProvider>
        <BrowserRouter>
          <Header />
          <Routes>
          <Route path='/' element={<Home />} />
            <Route path='/watchlist' element={<Watchlist />} />
            <Route path='/watched' element={<Watched />} />
            <Route path='/add' element={<Add />} />
            <Route path='/movie-detail/:id' element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </AnimatePresence>
    </div>
  );
}

export default App;
