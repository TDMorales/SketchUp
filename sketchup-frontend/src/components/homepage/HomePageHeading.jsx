import PropTypes from 'prop-types'
import React from 'react'
import {
  Button,
  Container,
  Header,
  Icon
} from 'semantic-ui-react'


 export const HomePageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Sketch-Up'
      inverted
      style={{
        fontSize:  '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop:  '3em',
        '--color-1': 'yellow',
        '--color-2': 'red',
        background: `
          linear-gradient(
            170deg,
            var(--color-1),
            var(--color-2) 80%
            
          )`,
        color: 'white',
        textAlign: 'center',
        padding: 30,
        borderRadius: 80
          }}
    />
    <Header
      as='h2'
      content='Bring Out Your Creativity As You Want'
      inverted
      style={{
        fontSize: '1.7em',
        fontWeight: 'normal',
        marginTop: '1.5em',
        marginTop:  '3em',
        textShadow: `3px 4px 7px rgba(81,67,21,0.8)`,
        
        backgroundImage: `
          linear-gradient(
            to left, violet, indigo, blue, green, yellow, orange, red
          ),
          -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        color: transparent;
        `
      }}
    />
    <Button primary size='huge'>
      Click to Create Your Design
      <Icon name='right arrow' />
    </Button>
  </Container>
)
HomePageHeading.propTypes = {
  mobile: PropTypes.bool,
}
