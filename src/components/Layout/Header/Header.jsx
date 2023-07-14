import React from 'react'
import HeaderCartButton from './HeaderCartButton'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <h1>The Witch's Brew</h1>
      <HeaderCartButton />
    </header>
  )
}

export default Header  