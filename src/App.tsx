import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/Home/HomePage';
import Header from './components/header';
import Menu from './components/menu';
import './App.css';
import AboutUsPage from './pages/About/AboutUsPage';

function App() {
  const [ menuOpen, setMenuOpen ] = useState<boolean>(false);
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/'  element={<HomePage menu={menuOpen}/>}/>
          <Route path='/about' element={<AboutUsPage />}/>
        </Routes>

        <Header menu={menuOpen}/>
        <Menu menuHandler={setMenuOpen} menu={menuOpen}/>
      </AnimatePresence>
    </div>
  )
}

export default App;
