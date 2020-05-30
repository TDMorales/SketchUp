import React, { useEffect } from 'react'
import { useUser }from '../UseUser'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { UploadButton } from './ProfileButtons/UploadButton'


export function ProfilePage(props){
  //update user and his / her images here so profile page refreshes
    let history = useHistory()
    let [currentUser] = useUser()
    // console.log(user.images)
    // let currentUser = props.currentUser
    
    if(currentUser.username === undefined && currentUser.images === undefined){
        currentUser = {username: "default", password: "password", images: []}
    }
    return (
        // console.log(currentUser.images),
         <div style={{background:"lightgray"}}>
            <h1>Welcome</h1>
              <div class="ui massive violet label">{currentUser.username}</div>
                <h2>Image Gallery:</h2>
                {(currentUser.images !== undefined) ? 
                currentUser.images.map( image => 
                <div class="ui card" class="ui segment" >
                  <img onClick={() => history.push(`/show/${image.id}`)} src={image.url} class="ui fluid image" class="ui medium centered image" />  
                </div>
                )
                :
                null}
                <UploadButton />
                
          </div>
        )
    
}