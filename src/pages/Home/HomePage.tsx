import React, { useState } from 'react';
import styles from './HomePage.module.css';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <motion.div 
      className={styles.container}
    >
      <motion.div >
        <div className={styles.grid}>
          <div className={styles.gridOne}>
            <h1>Life Insurance Done The Right Way.</h1>
          </div>

          <div className={styles.gridTwo}>
            <img src="" alt="" />
          </div>

          <div className=''>three</div>
          <div className=''>four</div>

          <div className={styles.services}>
            <h2>Our Services</h2>
            <div className={styles.servicesCard}>
              <div>
                <span>&</span>
                <h3>LIfe Insurance with Living Benefit</h3>
              </div>
              <div>
                <h3>LIfe Insurance with Hospital Benefit</h3>
              </div>
              <div>
                <h3>ObamaCare Health Insurance</h3>
              </div>
              <div>
                <h3>Retirement Investment</h3>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default HomePage;