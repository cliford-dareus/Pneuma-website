import React from 'react';
import styles from './menu.module.css';
import { easeInOut, motion } from "framer-motion";

const variants = {
  open: { y: -100},
  closed: { scale: [1, 1.05, 1.05, 1, 1],
  transition: {
    repeat: Infinity,
    ease: easeInOut,
    duration: 1
  }},
}

const index = ({ menuHandler, menu }: {menuHandler: any, menu: boolean}) => {
  return (
    <motion.button 
      animate={menu ? "open" : "closed"}
      variants={variants}
      whileHover={{scale: 1.2}}
      className={`${styles.menu__container}`}
      onClick={()=> menuHandler(!menu)}
    >
        {menu? 'Close' : 'Menu'}
    </motion.button>
  )
}

export default index;