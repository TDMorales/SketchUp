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
        //finish profile page and active storage in rails
        <div class="ui card">
        <div class="image">
          <img src="/images/avatar2/large/kristy.png" />
        </div>
        <div class="content">
          <a class="header">{currentUser.username}</a>
          <div class="meta">
            <span class="date">Joined in 2013</span>
          </div>
          <div class="description">
            Kristy is an art director living in New York.
          </div>
        </div>
        <div class="extra content">
          <a>
            <i class="user icon"></i>
            22 Friends
          </a>
        </div>
      </div>
            /* <div>
                <h1>Welcome</h1>
                <h1>{currentUser.username }</h1>
                <h2>Image Gallery:</h2>
                {(currentUser.images) ? 
                 currentUser.images.map( image => 
                <img onClick={() => history.push(`/show/${image.id}`)} src={image.image}/>  
                )
                :
                null}
            </div> */
        )
    
}