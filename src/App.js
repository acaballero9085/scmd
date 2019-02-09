import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton'

// Components
import Pricing from './sections/pricing/Pricing'
import About from './sections/about/About'
import Contact from './sections/contact/Contact'

// Styles
import './App.css'
import { styles } from './AppStyles'
import logo from './sections/assets/logo.png'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      open: false
    }

    this.nav = this.nav.bind(this)
  }

  nav(path) {
    const {history} = this.props
    history.push(path)
  }

  render() {

    return (
      <div className='landing-page-container'>

        <img className='icon' width='600' height='300' src={logo} alt='logo'></img>

        <label className='mission-statement'></label>

        <div className='landing-nav-buttons'>
          <FlatButton label="About us" labelStyle={styles.buttonLabelStyle} onClick={() => {this.nav('/about'); this.setState({open: !this.state.open})}}/>
          <FlatButton label="Contact us" labelStyle={styles.buttonLabelStyle} onClick={() => {this.nav('/contact'); this.setState({open: !this.state.open})}}/>
          <FlatButton label="Pricing" labelStyle={styles.buttonLabelStyle} onClick={() => {this.nav('/pricing'); this.setState({open: !this.state.open})}}/>
        </div>

        <Switch>
          <Route path='/about' component={About}/>
          <Route path='/pricing' component={Pricing}/>
          <Route path='/contact' component={Contact}/>
        </Switch>

      </div>
    )
  }
}

export default withRouter(App)