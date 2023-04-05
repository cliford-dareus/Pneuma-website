import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HomePage from './pages/Home/HomePage';
import Header from './components/header';
import Menu from './components/menu';
import './App.css';
import AboutUsPage from './pages/About/AboutUsPage';
import Layout from './components/layout';
import Cursor from './components/cursor';
import { ICoord } from './utils/type';

function App() {
  const [ dataset, setDataSet ] = useState<string | unknown>('');
  const [ mouseLocation, setMouseLocation ] = useState<ICoord>({x: 0, y: 0});
  const [ menuOpen, setMenuOpen ] = useState<boolean>(false);
  const location = useLocation();

  useEffect(()=>{
    const getMousePosition = (e: any) => {
      const str = Object.values(e.target.dataset)[0]
      setDataSet(str);


      setMouseLocation({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener('mousemove', getMousePosition);

    return () => {
      window.removeEventListener('mousemove', getMousePosition);
    }
  },[])

  return (
    <div className="App">
      <AnimatePresence mode='wait' >
        <Routes location={location} key={location.pathname} >
          <Route element={<Layout menu={menuOpen}/>}>
            <Route path='/'  element={<HomePage />}/>
            <Route path='/about' element={<AboutUsPage />}/>
          </Route>
        </Routes>
      </AnimatePresence>

        <Header menu={menuOpen}/>
        <Menu menuHandler={setMenuOpen} menu={menuOpen}/>
        <Cursor pos={mouseLocation} data={dataset}/>
    </div>
  )
}

export default App;
