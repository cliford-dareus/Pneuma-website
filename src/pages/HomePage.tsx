import React, { useState } from 'react';
import Header from '../components/header';
import Menu from '../components/menu';

const HomePage = () => {
  const [ menuOpen, setMenuOpen ] = useState<boolean>(true);
  console.log(menuOpen)
  return (
    <div className='w-full h-full relative '>
      Homepage
      <Header menu={menuOpen}/>
      <Menu menuHandler={setMenuOpen} menu={menuOpen}/>
    </div>
  )
}

export default HomePage;