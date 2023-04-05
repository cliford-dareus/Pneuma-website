import React from 'react';
import styles from './cursor.module.css';
import { ICoord } from '../../utils/type';
import { motion } from 'framer-motion';

const index = ({ pos, data }: {pos: ICoord, data: string}) => {

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
    >
      { data !== 'undefined'?
        <p>{data}</p>:''
      }
    </motion.div>
  )
}

export default index;