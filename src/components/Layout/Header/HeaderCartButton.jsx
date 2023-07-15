import React, { forwardRef, useRef } from 'react'
import CartIcon from './CartIcon'
import styles from './HeaderCartButton.module.css'
import Modal from '../../UI/Modal'
import Cart from '../../Cart/Cart'

function HeaderCartButton() {
    return (
        <>
            <button className={styles['cart-button']}>
                <span>
                    <CartIcon />
                </span>
                <span>My Cart</span>
                <span className={styles.badge}>3</span>
            </button >
            <Cart />
        </>
    )
}

export default HeaderCartButton