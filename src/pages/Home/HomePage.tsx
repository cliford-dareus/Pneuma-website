import React, { useState } from 'react';
import styles from './HomePage.module.css';
import { motion } from 'framer-motion';
import Slider from '../../components/slider';
import taxImage from '../../assets/taxImage.jpg';
import insIMage from '../../assets/pexels-mikhail-nilov-7735637.jpg';
import { BsHospital } from 'react-icons/bs';
import { FaUmbrellaBeach, FaStethoscope, FaHandHoldingHeart } from 'react-icons/fa';

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
            <img src={insIMage} alt="" />
            <img src={taxImage} alt="" />
            <img src={taxImage} alt="" />
            <img src={taxImage} alt="" />
            <img src={taxImage} alt="" />
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
              <div>
                <span>
                  <FaHandHoldingHeart />
                </span>
                <h3>Life Insurance with Living Benefit</h3>
              </div>
              <div>
                <span>
                  <BsHospital />
                </span>
                <h3>Life Insurance with Hospital Benefit</h3>
              </div>
              <div>
                <span>
                  <FaStethoscope />
                </span>
                <h3>ObamaCare Health Insurance</h3>
              </div>
              <div>
                <span>
                  <FaUmbrellaBeach />
                </span>
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