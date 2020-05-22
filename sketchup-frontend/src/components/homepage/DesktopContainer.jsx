import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { HomePageHeading } from './HomePageHeading'
import ImagesButton from './HomePageButtons/ImagesButton'

import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility
} from 'semantic-ui-react'
import LoginButton from './HomePageButtons/LoginButton'


const getWidth = () => {
  const isSSR = typeof window === 'undefined'
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
]

export class DesktopContainer extends Component {

  
  // static PropTypes
  static propTypes = {
    color: PropTypes.string,
  }
  
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  
  render() {
    const { children, color } = this.props
    const { fixed, activeItem } = this.state
    
   

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
              color={color} 
              
            >
              <Container>
                
                
                <Menu.Item
                  name='home'
                  active={activeItem === 'home'}
                  onClick={this.handleItemClick}
                  as='a' basic color='violet' 
                  
                />
                
                <Menu.Item
                  name='create a design'
                  active={activeItem === 'create a design'}
                  onClick={this.handleItemClick}
                  as='a' basic color='olive'
                />
                
                <Menu.Item
                  name='new releases'
                  active={activeItem === 'new releases'}
                  onClick={this.handleItemClick}
                  as='a' basic color='teal'
                />
                
                <Menu.Item>
                  {/* name='all images'
                  active={activeItem === 'all images'}
                  onClick={this.handleItemClick}
                  as='a' basic color='pink' */}
                  <ImagesButton fixed={this.state.fixed}/>
                </Menu.Item>
                
                <Menu.Item position='right'>
                  {/* create login button component and import on line 113 */}
                  <LoginButton fixed={this.state.fixed}/>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomePageHeading />
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}
DesktopContainer.propTypes = {
  children: PropTypes.node,
}
