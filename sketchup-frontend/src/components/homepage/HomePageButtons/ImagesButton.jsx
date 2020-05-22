import React from 'react'
import { Menu } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

export default function ImagesButton(props){
     let history = useHistory()

    return(

        <Menu.Item
          name='all Images'
          active={props.activeItem === 'sample2'}
          onClick={props.handleItemClick}
          as='a' basic color='red'
          onClick={
            ()=> history.push('/index')
          }
        />
    )
}
