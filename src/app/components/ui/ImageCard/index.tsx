import React from 'react';

import styles from "./ImageCard.module.scss";

export interface ImageCardProps {
  imageUrl: string;
  children: any;
  altText: string;
}

const ImageCard: React.SFC<ImageCardProps> = ({ imageUrl, altText, children }) => {
  return (
    <div>
      <img src={imageUrl} alt={altText} />

      <div className={styles.cardContent}>
        {children}
      </div>
    </div>
  );
}

export default ImageCard;