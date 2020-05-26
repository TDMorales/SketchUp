import React, { useEffect } from 'react'
import { useUser }from '../UseUser'
import { useState } from 'react'
import { useHistory } from 'react-router'

export function ProfilePage(props){

    let history = useHistory()
    // console.log(props.currentUser)
    let currentUser = props.currentUser

    if(currentUser.username === undefined){
        currentUser = {username: "default", password: "password", images: []}
        console.log(currentUser)
    }
    return (
            <div>
                <h1>Logged in As:</h1>
                <h1>{currentUser.username }</h1>
                <h2>Image Gallery:</h2>
                {(currentUser.images) ? 
                 currentUser.images.map( image => 
                <img onClick={() => history.push(`/show/${image.id}`)} src={image.image}/>  
                )
                :
                null}
            </div>
        )
    
}