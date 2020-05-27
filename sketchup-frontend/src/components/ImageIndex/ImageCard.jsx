import React from 'react'
import { useHistory } from 'react-router'

export function ImageCard(props){
    let history = useHistory()
    const { image } = props

 
    return(
        <div className='ui card'>
            <div className='content'>
                {/* avatar image */}
                <img 
                alt='' 
                className="ui avatar image" 
                src='https://avatarfiles.alphacoders.com/916/91685.jpg'
                ></img>
                <span>{image.user.username}</span>
                {/* image div */}
                <div className='header'>
                    <h5 className ='ui center aligned header '>{image.title}</h5>
                    <img 
                    alt='' 
                    src={image.url}
                    class="ui fluid image"
                    onClick={()=> history.push(`/show/${image.id}`)}
                    />  
                </div>
            </div>
        </div>
    )
    }