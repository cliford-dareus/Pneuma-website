import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { motion } from "framer-motion";
import Card from './Card';
import { menuData } from '../../utils/data';
import { ICard } from '../../utils/type';

const variants = {
  open: { y: 0},
  closed: { y: 300},
};

const index = ({ menu }: {menu: boolean}) => {
  return (
    <motion.nav 
      className={styles.header__container}
      animate={menu ? "open" : "closed"}
      transition={{type: 'tween'}}
      variants={variants}
    >
      <div className={styles.menu__cardholder}>
        <div className={styles.menu__container}>
          { menuData.map((card) => {
            return(
              <Card 
                key={card.id}
                card={card}
              />
            )
          })}
        </div>
      </div>
    </motion.nav>
  )
}

export default index;