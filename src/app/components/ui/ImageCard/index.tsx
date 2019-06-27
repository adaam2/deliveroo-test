import React from 'react';

import styles from "./ImageCard.module.scss";

export interface ImageCardProps {
  imageUrl: string;
  children: any;
}

const ImageCard: React.SFC<ImageCardProps> = ({ imageUrl, children }) => {
  return (
    <div>
      <img src={imageUrl} />

      <div className={styles.cardContent}>
        {children}
      </div>
    </div>
  );
}

export default ImageCard;