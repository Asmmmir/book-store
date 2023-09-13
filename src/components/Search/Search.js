import React, { useRef, useState } from "react";
import styles from "./Search.module.scss";
import { useDispatch } from "react-redux";
import { fetchSearch } from "../../store/search/searchSlice";

const Search = () => {


  const [searchData,setSearchData] = useState({})

const search = useRef()
const category = useRef()
const sorting = useRef()
const dispatch = useDispatch();



const searchBook = (e) => {
  e.preventDefault()
  const searchParams = {
    search: search.current.value,
    category: category.current.value,
    sorting: sorting.current.value,

  }
  dispatch(fetchSearch(searchParams))
}




  return (
    <div className={styles.search}>
      <div className={styles.search__container}>
        <h1>Search for books</h1>
        <form onSubmit={searchBook}>
          <input type="text" placeholder="Search" ref={search}/>
        </form>

        <div className={styles.search__filters}>
          <div className={styles.categories}>
            <p>Categories</p>
            <select name="category" id="" onChange={searchBook} ref={category}>
              <option value="all">all</option>
              <option value="art">art</option>
              <option value="biography">biography</option>
              <option value="computers">computers</option>
              <option value="history">history</option>
              <option value="medical">medical</option>
              <option value="poetry">poetry</option>
            </select>
          </div>
          <div className={styles.sorting}>
            <p>Sorting by</p>
            <select name="sorting" id="" onChange={searchBook} ref={sorting}>
              <option value="relevance">relevance</option>
              <option value="newest">newest</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
