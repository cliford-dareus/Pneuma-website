import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './layout.module.css';
import { motion } from 'framer-motion';

const variants = {
    open: {y: -250},
    closed: {}
}

const index = ({menu}: {menu: boolean}) => {
  return (
    <motion.div 
        className={styles.container}
        
    >
        <motion.div 
            className={styles.content}
            animate={menu ? "open" : "closed"}
            variants={variants}
        >
            <div 
                className={styles.logo}
                data-logo='Pneuma'
            >
                <span>Pneuma</span> 
            </div>

            <Outlet />
            
        </motion.div>
    </motion.div>
  )
}

export default index;