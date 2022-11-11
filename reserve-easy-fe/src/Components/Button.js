import React from 'react'

import styles from './Buttton.css'


const Primarybutton = (props) => {
    return (
        <div>
            <div className={styles['dummy-container']}>
                <button className={styles['primarybutton']}>
                    <img
                        src="/rectangle533-dzu-200h.png"
                        className={styles['rectangle']}
                    />
                    <span className={styles['text']}>
            <span>Kayıt Ol</span>
          </span>
                </button>
            </div>
        </div>
    )
}

export default Primarybutton