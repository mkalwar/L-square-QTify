import React from 'react';
import styles from './SearchBar.module.css';
import { ReactComponent as SearchIcon } from '../../Assets/Search-icon.svg';

const SearchBar = ({placeholder, data}) => {
  return (
    <>
    <form className={styles.wrapper}>
      <input className={styles.search} placeholder="Search an album of your choice"/>
      <button className={styles.searchbutton} type="submit">
      <SearchIcon />
      </button>
      </form>
      </>
  )
}

export default SearchBar