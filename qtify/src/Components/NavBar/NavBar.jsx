import React from 'react';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import styles from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';


const NavBar = () => {
  return (
    
    <nav className={styles.navBar}>
      <Logo />
    <SearchBar />
    <Button children="give feedback"/>

    </nav>
  )
}

export default NavBar;