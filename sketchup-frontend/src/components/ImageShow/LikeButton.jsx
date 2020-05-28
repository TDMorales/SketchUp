import React from 'react'
import {useState, useEffect } from 'react'

export function LikeButton (props) {

    let [likes, addLikes] = useState(props.likes)

    //determine when to change likes
    const handleClick = () => {
        addLikes( likes += 1)
        props.handleLikes(likes)
    }

    useEffect( () => {
        addLikes(props.likes)
        
    }, [props.likes] )

    return (
        <button  className="ui blue button" onClick={() => handleClick()}>
            Likes: {likes}
        </button>
    )
}