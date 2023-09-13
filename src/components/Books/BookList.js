import React from "react";
import styles from "./BookList.module.scss";
import Book from "./Book";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";


const BookList = ({ books }) => {

  return (
    <div className={styles.booklist}>
      {books ? (
        books.map((book) => (
          <Link key={book.id} to={`/${book.id}`}>
            <Book
              title={book.volumeInfo.title}
              category={
                book.volumeInfo.categories
                  ? book.volumeInfo.categories[0]
                  : "Without category"
              }
              image={
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbnail
                  : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png"
              }
              author={book.volumeInfo.authors}
            />
          </Link>
        ))
      ) : (
        <ReactLoading type={"spin"} color={"cyan"} />
      )}
      
    </div>
    
  );
};

export default BookList;
