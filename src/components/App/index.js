import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import {
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

const image = 'https://images.unsplash.com/photo-1605142859862-978be7eba909?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

const SidebarExampleSidebar = () => {
  const [visible, setVisible] = React.useState(false)

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Checkbox
          checked={visible}
          label={{ children: <code>visible</code> }}
          onChange={(e, data) => setVisible(data.checked)}
        />
      </Grid.Column>

      <Grid.Column>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={() => setVisible(false)}
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

          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              <Image src='/images/wireframe/paragraph.png' />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  )
}

const App = () => (
  <div className="app">
    <WebHeader />
    <SidebarExampleSidebar />
    <Switch>
      <Route exact path="/">
        <div fluid className="content__home">
          <div className="home__text">
            <h1 className="home__title">Scenarioz</h1>
            <p className="home__subtitle">La bibliothèque de scénarios, faite par un Maître de Jeux, pour les Maîtres de Jeux.</p>
            <Link to="/scenarios" className="home__button">Trouver le scénario parfait</Link>
          </div>
        </div>
      </Route>
      <Route exact path="/scenarios">
        <Scenarios />
      </Route>
      <Route exact path="/creators">
        <Creators />
      </Route>
    </Switch>
    <Footer />
  </div>
);

export default App;