import React, { useEffect, useState } from "react";
import styles from "./Main.module.scss";
import BookList from "../Books/BookList";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncData } from "../../store/books/bookSlice";



const Main = () => {

const dispatch = useDispatch();
const books = useSelector((state) => state.async.data);


useEffect(() => {
  dispatch(fetchAsyncData());
}, [dispatch]);

  return (
    <div className={styles.main}>
      <p>Found {books.totalItems} results</p>
      <BookList books={books.items} />
      <p>Load more</p>
    </div>
  );

  
};

export default Main;