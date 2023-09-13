import React, { useState } from "react";
import styles from "./Description.module.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBook } from "../../store/books/descriptionSlice";
import { useEffect } from "react";

const Description = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const book = useSelector((state) => state.description.book);
  console.log(book);

  useEffect(() => {
    dispatch(fetchBook(params.bookId));
  }, [dispatch]);

  const thumbnail = book?.volumeInfo?.imageLinks?.thumbnail || "";

  return (
    <div className={styles.description}>
      <div className={styles.description__container}>
        <img
          className={styles.description__image}
          src={thumbnail}
          alt=""
        />
        <div className={styles.description__main}>
          <p className={styles.description__category}>{book?.volumeInfo?.categories?.[0] || "Without category"}</p>
          <h2 className={styles.description__title}>{book?.volumeInfo?.title}</h2>
          <p className={styles.description__authors}>{book?.volumeInfo?.authors}</p>
          <p className={styles.description__subtitle}>{book?.volumeInfo?.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
