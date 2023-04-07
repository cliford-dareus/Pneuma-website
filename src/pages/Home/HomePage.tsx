import React, { useState } from 'react';
import styles from './HomePage.module.css';
import { motion } from 'framer-motion';
import Slider from '../../components/slider';
import { services } from '../../utils/data';
import taxImage from '../../assets/taxImage.jpg';
import insIMage from '../../assets/pexels-mikhail-nilov-7735637.jpg';

const HomePage = () => {
  return (
    <motion.div 
      className={styles.container}
    >
      <motion.div >
        <div className={styles.grid}>
          <div className={styles.gridOne}>
            <h1>Life Insurance Done The Right Way...</h1>
          </div>

          <div className={styles.gridTwo}>
            <div className=''>
            </div>
          </div>

          <div className={styles.gridThree}>
            <Slider />
          </div>

          <div className={styles.gridFour}>
            <h2>Our Services</h2>
            <div></div>
          </div>
        
          <div className={styles.services}>
            {/* <h2>Our Services</h2> */}
            <div className={styles.servicesCard}>
              { services.map((service) => {
                return(
                  <div 
                    key={service.id}
                    data-_={service.data}
                  >
                    <span>
                      {<service.icon />}
                    </span>
                    <h3 data-_={service.data}>{service.title}</h3>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default HomePage;