import React from 'react'

export default class ImageUpload extends React.Component{

    uploadImageHandler=(e)=>{
        e.preventDefault()
        let body = new FormData(e.target)
        fetch('http://localhost:3000/images/create', {
        method: 'POST',
        body: body, 
        credentials: 'include'
        })
    }

    render(){
    return(
        <form onSubmit={this.uploadImageHandler} className='ui input focus'>
            <input 
            label="title" 
            placeholder="Image Title"
            name='newImageTitle'
            ></input>
            <input  
            type='file' 
            accept='image/png, image/jpeg'
            name='newImage'
            ></input>
            <button >Upload Photo</button>
        </form>
    )
    }
}


