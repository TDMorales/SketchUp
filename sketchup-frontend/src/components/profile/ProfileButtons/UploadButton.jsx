import React from 'react'
import { Button } from 'semantic-ui-react'
import { useHistory } from 'react-router'

export function UploadButton(){
    let history = useHistory()

    return (
        <div>
            <Button onClick={()=> history.push('/new')}>
                Upload Image
            </Button>
        </div>
    )
}