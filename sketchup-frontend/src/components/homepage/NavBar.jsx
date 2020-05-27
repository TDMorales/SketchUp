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
import LogOutButton from './HomePageButtons/LogoutButton'
import ShowUser from './HomePageButtons/ShowUser'
import { useUser } from '../UseUser'

const getWidth = (props) => {
  const isSSR = typeof window === 'undefined'
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

export class NavBar extends Component {

  state = { activeItem: 'home' }
          

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
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
            style={{ minHeight: 80, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'

            >
              <Container>

                <Home handleItemClick={this.handleItemClick} activeItem={this.state.activeItem}/>

                <CreateADesign handleItemClick={this.handleItemClick} activeItem={this.state.activeItem}/>

                <NewReleases handleItemClick={this.handleItemClick} activeItem={this.state.activeItem}/>

                <ImagesButton handleItemClick={this.handleItemClick} activeItem={this.state.activeItem}/>

                <Menu.Item position='right'>
                  {/* create login button component and import on line 113 */}
                  {/* render logic to show Login or LogOut depending on
                  user login status */}
                  {/* could do a fetch */}
                  <ShowUser fixed={this.state.fixed} currentUser={this.props.currentUser}/>
                  <LoginButton fixed={this.state.fixed} currentUser={this.props.currentUser}/>
                  <LogOutButton fixed={this.state.fixed} currentUser={this.props.currentUser}
                    setUser={this.props.setUser}
                  />
                  <SignUp fixed={this.state.fixed} currentUser={this.props.currentUser}/>
                </Menu.Item>

              </Container>
            </Menu>
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}
NavBar.propTypes = {
  children: PropTypes.node,
}