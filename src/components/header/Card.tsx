import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { ICard } from '../../utils/type';

const Card = ({card}: {card: ICard}) => {
  return (
    <Link 
      to={card.to} 
      className={styles.menu__card}
    >
      <h4>{card.name}</h4>
    </Link>
  )
}

export default Card;