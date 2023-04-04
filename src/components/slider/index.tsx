import React, { useEffect, useRef, useState } from 'react';
import styles from './slider.module.css';

const index = () => {
    const [ Index, setIndex ] = useState<number>(1)
    const slide = [1,2,3,4];
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
                    className={`${styles.slide} ${Index === index? styles.active: ''}`}
                >
                    <span>{x}</span>
                </div>
            )
            })} 
        </div>
        
    </div>
  )
}

export default index;