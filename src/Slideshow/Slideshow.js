import React from 'react'
import { images } from '../slideImages'
import Slide from '../Slide/Slide'
import styles from './styles.css'

function Slideshow() {
    console.log(images.length)
    return (
        <div className="slideShow">
            {/* Make listed components of the Slide components */}
            {
                images.map((image) => <Slide image={image}/>)
                
            }
            <Slide image={50} className="now" />
        </div>
    )
}

export default Slideshow