import React from 'react'
import styles from './Cart.module.css'
import DUMMY_DATA from '../../data/dummy-data.js'
import Modal from '../UI/Modal'

function Cart() {
    const cartItems = (
        <ul className={styles['cart-items']}>
            {[{
                ...DUMMY_DATA[0], amount: 2
            }].map(item => (
                <li>{item.name}</li>
            ))}
        </ul>
    )

    return (
        <Modal>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>35 Coins</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button-alt']}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart