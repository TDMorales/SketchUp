import React, { useEffect } from 'react'
import { useUser }from '../UseUser'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { UploadButton } from './ProfileButtons/UploadButton'

export function ProfilePage(props){
  //update user and his / her images here so profile page refreshes
    let history = useHistory()
   
    let currentUser = props.currentUser

    if(currentUser.username === undefined){
        currentUser = {username: "default", password: "password", images: []}
    }
    console.log(currentUser.images)
    return (
         <div>
            <UploadButton />
                <h1>Welcome</h1>
                <h1>{currentUser.username }</h1>
                <h2>Image Gallery:</h2>
                <img src={currentUser.images[5]}/>
                {(currentUser.images != []) ? 
                currentUser.images.map( image => 
                <div class="ui card" class="ui segment">
                  <img onClick={() => history.push(`/show/${image.id}`)} src={image.url} class="ui fluid image" class="ui medium centered image" />  
                </div>
                )
                :
                null}
            </div>
        )
    
}