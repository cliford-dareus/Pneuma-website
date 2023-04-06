import React, { useEffect, useRef, useState } from 'react';
import styles from './slider.module.css';
import { slide } from '../../utils/data';

const index = () => {
    const [ Index, setIndex ] = useState<number>(1)
    const timeoutRef = useRef<any>(null);

    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === slide.length - 1 ? 0 : prevIndex + 1
          ),
        10000
      );
  
      return () => {
        resetTimeout();
      };
    }, [Index]);

  return (
    <div className={styles.container}>
        <div className={styles.slider}>
           {slide.map((x, index)=> {
            return(
                <div 
                    key={index} 
                    className={`${styles.slide} ${Index === index? styles.active: ''}`}
                >
                  <img className={styles.slide__img} src={x.image} alt="" />
                  <span 
                    className={styles.slide__icon}
                  >
                    <span className={styles.icons}>{<x.icon/>}</span>
                    <p>{x.data}</p>
                  </span>
                </div>
            )
            })} 
        </div>
        
    </div>
  )
}

export default index;