import React from 'react'
import Input from '../../UI/Input'
import styles from './ProductForm.module.css'

function ProductForm() {
    return (
        <form className={styles.form}>
            <Input label="Amount" input={{
                id: "lol",
                type: "number",
                min: 1,
                max: 5,
                step: 1,
                defaultValue: 1
            }} />
            <button>+ Add</button>
        </form>
    )
}

export default ProductForm