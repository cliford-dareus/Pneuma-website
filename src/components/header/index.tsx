import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { motion } from "framer-motion";
import Card from './Card';

const variants = {
  open: { y: 0},
  closed: { y: 300},
};

const index = ({ menu }: {menu: boolean}) => {
  const cards = [1,2,3,4]
  
  return (
    <motion.nav 
      className={styles.header__container}
      animate={menu ? "open" : "closed"}
      transition={{type: 'tween'}}
      variants={variants}
    >
      <div className={styles.menu__cardholder}>
        <div className={styles.menu__container}>
          { cards.map((card) => {
            return(
              <Card />
            )
          })}
        </div>
      </div>
    </motion.nav>
  )
}

export default index;