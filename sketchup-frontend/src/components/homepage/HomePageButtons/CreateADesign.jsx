import React from 'react'
import { Menu } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
export default function CreateADesign (props){
 let history = useHistory()
  return (
    <Menu.Item
      name='create a design'
      active={props.activeItem === 'create a design'}
      onClick={props.handleItemClick}
      as='a' basic color='olive'
      onClick={
        ()=> history.push('/create-a-design')
      }
    />
  )
}
