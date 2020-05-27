import React from 'react'
import { useHistory } from 'react-router'

export default function ImageLink(props){
console.log(props)
    let history = useHistory()

    return (
        <div className='header'>
            <h5 className ='ui center aligned header '>{props.image.title}</h5>
            <img 
            alt='' 
            src={props.image.image}
            onClick={()=> history.push(`/show/${props.image.id}`)}
            />  
        </div>
    )
}
