import React from 'react'
import { Menu } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
export default function NewReleases (props){
 let history = useHistory()
  return (
    <Menu.Item
      name='new releases'
      active={props.activeItem === 'new releases'}
      onClick={props.handleItemClick}
      as='a' basic color='teal'
      onClick={
        ()=> history.push('/index')
      }
    />
  )
}
