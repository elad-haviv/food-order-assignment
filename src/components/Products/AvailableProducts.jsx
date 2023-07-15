import React from 'react'
import Card from '../UI/Card'
import styles from './AvailableProducts.module.css'
import Product from './Product/Product'

import DUMMY_DATA from '../../data/dummy-data.js'

function AvailableProducts() {
    const productList = DUMMY_DATA.map(product => (
        <li key={product.id}>
            <Product item={product} />
        </li>
    ))

    return (
        <section className={styles.products}>
            <Card>
                <ul className={styles.products}>
                    {productList}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableProducts