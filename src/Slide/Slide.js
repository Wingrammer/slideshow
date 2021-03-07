import React from 'react'
import styles from './styles.css'

function Slide({image}) {
    return (
        <div className="slide">
            <img src={image} alt="slide image"/>
        </div>
    )
}

export default Slide
