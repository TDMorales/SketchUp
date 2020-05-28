import React from 'react'
import { Button } from 'semantic-ui-react'
import { useHistory } from 'react-router'

export function UploadButton(){
    let history = useHistory()

    return (
        <div>
            <Button onClick={()=> history.push('/index')}>
                Upload Image
            </Button>
        </div>
    )
}