import React, { useState } from 'react';
import styles from './HomePage.module.css';
import { motion } from 'framer-motion';

const variants = {
  open: {y: -250},
  closed: {}
}

const HomePage = ({ menu }: {menu: boolean}) => {
  return (
    <motion.div className={styles.container}>
      <motion.div 
        animate={menu ? "open" : "closed"}
        variants={variants}
        className={styles.content}
      >
        <div className={styles.grid}>
          <div className={styles.gridOne}>
            <h1>Life Insurance Done The Right Way.</h1>
          </div>
          <div>two</div>
          <div>three</div>

          <div className={styles.services}>
            <h2>Our Services</h2>
            <div className={styles.servicesCard}>
              <div>
                <span>&</span>
                <h3>Living Benefit</h3>
              </div>
              <div>
                <h3>Living Benefit</h3>
              </div>
              <div>
                <h3>Living Benefit</h3>
              </div>
              <div>
                <h3>Living Benefit</h3>
              </div>
            </div>
          </div>
        </div>
        
      </motion.div>
    </motion.div>
  )
}

export default HomePage;