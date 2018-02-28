import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import { Route, Switch, withRouter } from 'react-router-dom'

// Components
import Bio from './sections/bios/Bio'
import Home from './sections/home/Home'
import Store from './sections/store/Store'
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

        <div className='nav-container'>

          <div>
            <h2 className='title'>SWC</h2>
          </div>

          <div className='nav-buttons-container'>
            <FlatButton label="Home" labelStyle={styles.buttonLabelStyle} onClick={() => this.nav('/')}/>
            <FlatButton label="About" labelStyle={styles.buttonLabelStyle} onClick={() => this.nav('/about')}/>
            <FlatButton label="Bios" labelStyle={styles.buttonLabelStyle} onClick={() => this.nav('/bios')}/>
            <FlatButton label="Store" labelStyle={styles.buttonLabelStyle} onClick={() => this.nav('/store')}/>
            <FlatButton label="Contact" labelStyle={styles.buttonLabelStyle} onClick={() => this.nav('/contact')}/>
          </div>
          
        </div>

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/bios' component={Bio}/>
          <Route path='/store' component={Store}/>
          <Route path='/contact' component={Contact}/>
        </Switch>

      </div>
    )
  }
}

export default withRouter(App)