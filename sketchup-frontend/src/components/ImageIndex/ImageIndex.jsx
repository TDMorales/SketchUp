import React, { useState, useEffect } from 'react'
import { ImageCard } from './ImageCard'

export function ImageIndex(){
    let [ images, setImage ] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/images')
            .then( resp => resp.json())
            .then( images => setImage(images))
    }, [])

    return (
        <div className='ui cards' style={{ marginTop: 30 }}>
            {images.map(image => (
                <ImageCard 
                    key={image.id}
                    image={image}
                />
            ))}
        </div>
    )
}
