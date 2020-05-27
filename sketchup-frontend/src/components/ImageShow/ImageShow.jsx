import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router'

export function ImageShow(props){
    let [ image, setImage ] = useState({})
    let history = useHistory()

    let params = useParams()
    // console.log(props)
    // console.log(params)
    let selectedImage = params.id 

    //return an empty array to prevent repeat requests
    useEffect(()=> {
        fetch(`http://localhost:3000/images/${selectedImage}`)
            .then( resp => resp.json())
            .then( image => setImage(image))
    }, [] )

    const handleDelete = () => {
        fetch(`http://localhost:3000/images/${selectedImage}`, {
            method: "DELETE"
        })
            .then( () => {
                history.push('/index')
            })
    }

    //check for undefined image AND undefined image.user
    if(image === undefined || image.user === undefined){
        image = {title: "default", url: "default", user: {username: "default", password: "default"}}
    }
    return (
        console.log(image.image),
         <div className="ui card fluid">
            <div className="content">
                <div className="header">{image.title}</div>
            </div>
            <div className="content">
            <img alt='' class="ui avatar image" src='https://avatarfiles.alphacoders.com/916/91685.jpg'></img>
                <span>{image.user.username}</span>
                <div className='header'>
                    <p>{image.title}</p>
                    <img alt='' src={image.url}/>
                </div>
            </div>
            <div className="content">
                <button className="ui red button" onClick={handleDelete}>Delete</button>
                <button 
                onClick={() => history.push(`/edit/${image.id}`)}
                className="ui green button"
                >Edit</button>
                <button 
                onClick={() => history.push('/index')}
                className='ui green button'
                >Home</button>
            </div>
        </div> 
    )
}


