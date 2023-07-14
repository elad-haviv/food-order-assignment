import React from 'react'
import Card from '../UI/Card'
import styles from './ProductsSummary.module.css'

function ProductsSummary() {
    return (
        <section className={styles.summary}>
            <Card>
                <h2>Unleash the magic within with our enchanted ingredients</h2>
                <p>At our enchanted alchemical ingredients shop, we offer only the highest quality ingredients to help you unleash the magic within.</p>
                <p>From enchanted elixirs and arcane herbs to mystical apothecary supplies, we have everything you need to take your magical abilities to the next level.</p>
            </Card>
        </section>
    )
}

export default ProductsSummary