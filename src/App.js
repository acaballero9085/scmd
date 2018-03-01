import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import React, { Component } from 'react'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'

// Components
import Bio from './sections/bios/Bio'
import Home from './sections/home/Home'
import Samples from './sections/samples/Samples'
import About from './sections/about/About'
import Contact from './sections/contact/Contact'

// Styles
import './App.css'
import { styles } from './AppStyles'

class App extends Component {
  constructor(props){
    super(props)

    this.nav = this.nav.bind(this)
  }

  nav(path) {
    const {history} = this.props
    history.push(path)
  }

  render() {
    return (
      <div>

        <AppBar
          title="SouthCoast Music and Design"
          showMenuIconButton={false}
          zDepth={2}
          style={{zIndex: 5, position: 'fixed'}}
        />

        <Drawer
          containerStyle={{zIndex: 1, marginTop: '4rem', width: '20%'}}
        >
          <MenuItem onClick={() => this.nav('/scmd/about')}>About Us</MenuItem>
          <MenuItem onClick={() => this.nav('/scmd/bios')}>Pricing</MenuItem>
          <MenuItem onClick={() => this.nav('/scmd/contact')}>Contact Us</MenuItem>
          <MenuItem onClick={() => this.nav('/scmd/samples')}>Sample</MenuItem>
        </Drawer>

        <Switch>
          
          <Route exact path='/scmd' render={() => (
            <Redirect to="/scmd/about"/>
          )}/>
          <Route path='/scmd/about' component={About}/>
          <Route path='/scmd/bios' component={Bio}/>
          <Route path='/scmd/samples' component={Samples}/>
          <Route path='/scmd/contact' component={Contact}/>
        </Switch>

      </div>
    )
  }
}

export default withRouter(App)