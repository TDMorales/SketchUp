
import React from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment
} from 'semantic-ui-react'

import { ResponsiveContainer } from './ResponsiveContainer'
import { MultiCarouselPage } from './MultiCarouselPage'

// Showcase
export const Showcase = () => (
  <ResponsiveContainer>

    <Segment style={{ padding: ' 0em', marginRight:  '3em', marginBottom: 0,}} vertical>
      <MultiCarouselPage />
    </Segment>
    
    
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          SketchUp The Funniest Memes...
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          
          Learn to master the art of design by creating images you always want to come back to see and for others to view.
        </p>
        <Button as='a' color='teal' size='large'>
          See People's Collections
        </Button>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Don't Have An Account Yet?</a>
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Wait no longer
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
          it's really true. It took years of gene splicing and combinatory DNA research, but our
          bananas can really dance.
        </p>
        <Button as='a' size='large'>
          Sign Up
        </Button>
      </Container>
    </Segment>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Collections</List.Item>
                <List.Item as='a'>Create Your Design</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Create</List.Item>
                <List.Item as='a'>Design</List.Item>
                <List.Item as='a'>Upload</List.Item>
                <List.Item as='a'>Download</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='To Do' />
              <List link inverted>
                <List.Item as='a'>Login</List.Item>
                <List.Item as='a'>Sign Up</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)