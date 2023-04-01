import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { motion } from "framer-motion";

const variants = {
  open: { width: 'auto'},
  closed: { width: 0},
}

const index = ({ menu }: {menu: boolean}) => {
  
  return (
    <motion.nav 
      className={styles.header__container}
      animate={menu ? "open" : "closed"}
      transition={{type: 'tween'}}
      variants={variants}
    >
      <div className=''>
        <div className=''>
          <h2 className=''>Home</h2>
        </div>
      </div>
    </motion.nav>
  )
}

export default index;