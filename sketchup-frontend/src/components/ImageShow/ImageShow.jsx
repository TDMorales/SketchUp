import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router'

export function ImageShow(){
    let [ image, setImage ] = useState(null)
    let history = useHistory()

    let params = useParams()
    console.log(params)
    let selectedImage = params.id 

    useEffect(()=> {
        fetch(`http://localhost:3000/images/${selectedImage}`)
            .then( resp => resp.json())
            .then( image => setImage(image))
    })

    const handleDelete = () => {
        fetch(`http://localhost:3000/images/${selectedImage}`, {
            method: "DELETE"
        })
            .then( () => {
                history.push('/index')
            })
    }
    return (
        console.log(params),
        <div className="ui card fluid">
            <div className="content">
                <div className="header">{params.title}</div>
            </div>
            <div className="content">
            <img alt='' class="ui avatar image" src='https://avatarfiles.alphacoders.com/916/91685.jpg'></img>
                <span>{params.user.username}</span>
                <div className='header'>
                    <p>{image.title}</p>
                    <img alt='' src={params.image}/>
                </div>
            </div>
            <div className="content">
                <button className="ui red button" onClick={handleDelete}>Delete</button>
                <button 
                onClick={() => history.push(`/edit/${params.id}`)}
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


