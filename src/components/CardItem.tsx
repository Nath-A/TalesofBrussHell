// CardItem.tsx

import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import styles from '../styles/Home.module.scss';

interface CardItemProps {
  imgSrc: string;
  title: string;
  description: string;
  buttonText: string;
}

const CardItem: React.FC<CardItemProps> = ({ imgSrc, title, description, buttonText }) => {
  return (
    <Card className={styles.cardItem}>
      <CardMedia
        component="img"
        height="180"
        image={imgSrc}
        alt={title}
        className={styles.cardImage}
      />
      <CardContent className={styles.cardContent}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        <Button size="small" color="primary" className={styles.cardButton}>
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardItem;
