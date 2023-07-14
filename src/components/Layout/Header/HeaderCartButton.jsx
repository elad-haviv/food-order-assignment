import React from 'react'
import CartIcon from './CartIcon'
import styles from './HeaderCartButton.module.css'

function HeaderCartButton() {
    return (
        <button className={styles['cart-button']}>
            <span>
                <CartIcon />
            </span>
            <span>My Cart</span>
            <span className={styles.badge}>3</span>
        </button>
    )
}

export default HeaderCartButton