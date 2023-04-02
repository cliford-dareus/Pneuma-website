import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/Home/HomePage';
import Header from './components/header';
import Menu from './components/menu';
import './App.css';
import AboutUsPage from './pages/About/AboutUsPage';
import Layout from './components/layout';

function App() {
  const [ menuOpen, setMenuOpen ] = useState<boolean>(false);
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence mode='wait' initial={false}>
        <Routes location={location} key={location.pathname} >
          <Route element={<Layout menu={menuOpen}/>}>
            <Route path='/'  element={<HomePage />}/>
            <Route path='/about' element={<AboutUsPage />}/>
          </Route>
        </Routes>

        <Header menu={menuOpen}/>
        <Menu menuHandler={setMenuOpen} menu={menuOpen}/>
      </AnimatePresence>
    </div>
  )
}

export default App;
