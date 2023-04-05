import React from 'react';
import styles from './cursor.module.css';
import { ICoord } from '../../utils/type';
import { motion } from 'framer-motion';

const index = ({ pos }: {pos: ICoord}) => {

  const variants = {
    default: {
      x: pos.x - 16,
      y: pos.y -16
    }
  }

  return (
    <motion.div 
      variants={variants}
      className={styles.cursor}
      animate='default'
    ></motion.div>
  )
}

export default index;