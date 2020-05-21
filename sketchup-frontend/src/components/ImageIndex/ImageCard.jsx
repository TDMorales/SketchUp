import React from 'react'

export function ImageCard(props){

    const { image } = props
    return(
        <div className='ui card'>
            <div className='content'>
            <img class="ui avatar image" src={image.image}></img>
                <span>{image.user_id}</span>
                <div className='header'>
                    <p>{image.title}</p>
                    <img alt='' src={image.image}/>
                    <button 
                    onClick={() => console.log(image)}
                    className='button ui green'
                    >
                        Show Details
                    </button>
                </div>
            </div>
        </div>
    )
}