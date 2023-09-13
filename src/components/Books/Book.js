import React from 'react';
import styles from './Book.module.scss';


const Book = ({ title, image, category, author }) => {

  return (
    <div className={styles.book}>
        <img src={image || 'No image'} alt="" width="200px" />
      <p className={styles.book__category}>{category}</p>
      <h5 className={styles.book__name}>{title}</h5>
      <p className={styles.book__author}>{author}</p>
    </div>
  );
};

export default Book;
