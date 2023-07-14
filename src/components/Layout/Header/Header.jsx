import React from 'react'
import HeaderCartButton from './HeaderCartButton'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
    </header>
  )
}

export default Header  