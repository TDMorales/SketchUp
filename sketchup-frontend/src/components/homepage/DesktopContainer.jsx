import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { HomePageHeading } from './HomePageHeading'
import ImagesButton from './HomePageButtons/ImagesButton'
import SignUp from './HomePageButtons/SignUp'
import NewReleases from './HomePageButtons/NewReleases'
import CreateADesign from './HomePageButtons/CreateADesign'
import Home from './HomePageButtons/Home'
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

                <Home handleItemClick={this.handleItemClick} activeItem={this.state.activeItem}/>

                <CreateADesign handleItemClick={this.handleItemClick} activeItem={this.state.activeItem}/>

                <NewReleases handleItemClick={this.handleItemClick} activeItem={this.state.activeItem}/>

                <ImagesButton handleItemClick={this.handleItemClick} activeItem={this.state.activeItem}/>

                <Menu.Item position='right'>
                  {/* create login button component and import on line 113 */}
                  <LoginButton fixed={this.state.fixed}/>
                  <SignUp fixed={this.state.fixed}/>
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
