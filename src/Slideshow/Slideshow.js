import React, { useEffect, useState } from 'react'
//importing the path list of images
import { images } from '../slideImages'
import Slide from '../Slide/Slide'
import styles from './styles.css'

function Slideshow() {
    //slideIndex is the translation factor
    const [slideIndex, setSlideIndex] = useState(0)
    //i is varying and being assigned to slideIndex
    const [i, setI] = useState(0)
    //update i
    const updateIndex = () => {
        //if there is no more image
        if (i+1 == images.length) {
            //Go to first image
            setI(0)
            setSlideIndex(i)
        } else {
            //Go to next image
            setI(i+1)
            setSlideIndex(i)
        }
    }

    useEffect(() => {
        //4 seconds delay
        setTimeout(()=>updateIndex(), 4000)

    }, [i])//every time i changes we count

    return (
        <div 
            className="slideShow"
            style={{
                //70/2 because the image is occupying the whole(100%)
                //half(/2) of the space(70vw)
                transform: `translate(${-slideIndex*70/2}vw)`
            }}
        >
            {/* Make listed components of the Slide components */}
            
            {
                images.map((image) => (
                <div className="singleSlide">
                    <Slide image={image}/>
                </div>)
                )
            }
            
            <Slide image={50} className="now" />
        </div>
    )
}

export default Slideshow