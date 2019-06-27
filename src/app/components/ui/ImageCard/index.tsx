import React from 'react';

import styles from "./ImageCard.module.scss";

export interface ImageCardProps {
  imageUrl: string;
  children: any;
  altText: string;
}

const ImageCard: React.SFC<ImageCardProps> = ({ imageUrl, altText, children }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={altText} className={styles.img} />

      <div className={styles.cardContent}>
        {children}
      </div>
    </div>
  );
}

export default ImageCard;