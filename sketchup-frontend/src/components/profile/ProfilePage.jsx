import React, { useEffect } from 'react'
import { useUser }from '../UseUser'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { UploadButton } from './ProfileButtons/UploadButton'

export function ProfilePage(props){

    let history = useHistory()

    let currentUser = useUser()
    
    if(currentUser.username === undefined){
        currentUser = {username: "default", password: "password", images: []}
    }
    console.log(currentUser)
    return (
            <div>
                <h1>Logged in As:</h1>
                <h1>{currentUser.username }</h1>
                <h2>Image Gallery:</h2>
           
                { currentUser.images.map( image => 
                <img 
                src={image.url}
                onClick={()=> history.push('/index')}/>  
                )}
                <UploadButton/>
            </div>
        )
    
}