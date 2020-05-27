import React, { useImperativeHandle } from 'react'
import { useHistory } from 'react-router'

export default function Image(props){

    let history = useHistory()
    return(
 
 <div className="ui card fluid">
     <div className="content">
         <div className="header">{props.image.title}</div>
     </div>
     <div className="content">
     <img alt='' class="ui avatar image" src='https://avatarfiles.alphacoders.com/916/91685.jpg'></img>
         <span>{props.image.user}</span>
         <div className='header'>
             <p>{props.image.title}</p>
             <img alt='' src={props.image.image}/>
         </div>
     </div>
     <div className="content">
         {/* <button className="ui red button" onClick={handleDelete}>Delete</button> */}
         <button 
         onClick={() => history.push(`/edit/${props.image.id}`)}
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