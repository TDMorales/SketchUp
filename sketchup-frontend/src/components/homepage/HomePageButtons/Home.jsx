import React from 'react'
import { Menu } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
export default function Home (props){
  let history = useHistory()

  return (
    <Menu.Item
      name='home'
      active={props.activeItem === 'home'}
      onClick={props.handleItemClick}
      as='a' basic color='violet'
      onClick={
        ()=> history.push('/index')
      }

    />
  )
}
