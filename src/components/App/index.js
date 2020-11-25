import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import {
  Container,
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react';

import './style.css';

import WebHeader from '../Header';
import Footer from '../Footer';
import Scenarios from '../Scenarios';
import Creators from '../Creators';
import HomePage from '../HomePage';

const image = 'https://images.unsplash.com/photo-1605142859862-978be7eba909?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

const HorizontalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Segment}
    animation={animation}
    direction={direction}
    visible={visible}
  >
    <Grid textAlign='center'>
      <Grid.Row columns={1}>
        <Grid.Column>
          <Header as='h3'>
            <WebHeader />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/scenarios">
                <Scenarios />
              </Route>
              <Route exact path="/creators">
                <Creators />
              </Route>
            </Switch>
            <Footer />
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Image src='/images/wireframe/media-paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='/images/wireframe/media-paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='/images/wireframe/media-paragraph.png' />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Sidebar>
)

const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon='labeled'
    inverted
    vertical
    visible={visible}
    width='thin'
  >
    <Menu.Item as='a'>
      <Icon name='home' />
      Home
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='gamepad' />
      Games
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='camera' />
      Channels
    </Menu.Item>
  </Sidebar>
)

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_ANIMATION':
      return { ...state, animation: action.animation, visible: !state.visible }
    case 'CHANGE_DIMMED':
      return { ...state, dimmed: action.dimmed }
    case 'CHANGE_DIRECTION':
      return { ...state, direction: action.direction, visible: false }
    case 'CHANGE_DISPLAY':
      return { ...state, visible: !state.visible }
    default:
      throw new Error()
  }
}

function App() {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    animation: 'push',
    direction: 'right',
    dimmed: false,
    visible: false,
  })

  const { animation, dimmed, direction, visible } = state
  const vertical = direction === 'bottom' || direction === 'top'


  return (
    <div className="app">
      <Sidebar.Pushable as={Segment} id="parent__container" style={{ overflow: 'hidden' }}>
        {vertical && (
          <HorizontalSidebar
            animation={animation}
            direction={direction}
            visible={visible}
          />
        )}
        {!vertical && (
          <VerticalSidebar
            animation={animation}
            direction={direction}
            visible={visible}
          />
        )}

        <Sidebar.Pusher dimmed={dimmed && visible}>
          <Segment id="global__container">


            {/* CONTENT STARTS HERE */}
            <WebHeader isMenuOpened={state.visible} switchSidebarDisplay={dispatch} />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/scenarios">
                <Scenarios />
              </Route>
              <Route exact path="/creators">
                <Creators />
              </Route>
            </Switch>
            <Footer />
            {/* CONTENT ENDS HERE */}


          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  )
}

export default App;