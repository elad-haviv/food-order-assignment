import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.css'

const portalTarget = document.getElementById("overlays")

function Modal({ children }) {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop />, portalTarget)}
            {ReactDOM.createPortal(<Overlay>{children}</Overlay>, portalTarget)}
        </>
    )
}

function Backdrop() {
    return <div className={styles.backdrop}></div>
}

function Overlay({ children }) {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

export default Modal