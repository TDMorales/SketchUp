import React, { useEffect } from 'react'
import { useUser }from '../UseUser'
import { useState } from 'react'
import { useHistory } from 'react-router'

export function ProfilePage(props){

    let history = useHistory()

    let currentUser = useUser()
    
    useEffect(() => {
        console.log(props.cUser)
            // fetch(`http://localhost:3000/get_user`, {
            //   credentials: 'include'
            // })
            //   .then(resp => resp.json())
            //   .then( user => {
            //       console.log(user)
            //   })
        // console.log("the user id is", user)
    //     fetch(`http://localhost:3000/users/${this.props.match.params.id}`,{
    //         credentials: 'include'
    //     })
    //         .then( response => response.json())
    //         .then( currentUser => 
    //             this.setState({ 
    //                 user: currentUser 
    //             }) 
    //         )
    }, [] )

    if(currentUser.username === undefined){
        currentUser = {username: "default", password: "password", images: []}
        console.log(currentUser)
    }
    return (
            <div>
                <h1>Logged in As:</h1>
                <h1>{currentUser.username }</h1>
                <h2>Image Gallery:</h2>
           
                { currentUser.images.map( image => 
                <img src={image.image}/>  
                )}
            </div>
        )
    
}