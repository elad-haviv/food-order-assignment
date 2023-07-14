import React from 'react'
import ProductForm from './ProductForm'
import styles from './Product.module.css'

function Product({ item }) {
    return (
        <div className={styles.product}>
            <div>
                <h3>{item.name}</h3>
                <p className={styles.description}>{item.description}</p>
                <p className={styles.price}>{item.price} Coins</p>
            </div>
            <div>
                <ProductForm />
            </div>
        </div>
    )
}

export default Product