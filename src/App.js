import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import { Route, Switch, withRouter } from 'react-router-dom'

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

        <div className='nav-container'>

          <div>
            <h2 className='title'>SouthCoast Music and Design</h2>
          </div>

          <div className='nav-buttons-container'>
            <FlatButton label="Home" labelStyle={styles.buttonLabelStyle} onClick={() => this.nav('/')}/>
            <FlatButton label="About us" labelStyle={styles.buttonLabelStyle} onClick={() => this.nav('/about')}/>
            <FlatButton label="Pricing" labelStyle={styles.buttonLabelStyle} onClick={() => this.nav('/bios')}/>
            <FlatButton label="Sample Work" labelStyle={styles.buttonLabelStyle} onClick={() => this.nav('/samples')}/>
            <FlatButton label="Contact us" labelStyle={styles.buttonLabelStyle} onClick={() => this.nav('/contact')}/>
          </div>
          
        </div>

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/bios' component={Bio}/>
          <Route path='/samples' component={Samples}/>
          <Route path='/contact' component={Contact}/>
        </Switch>

      </div>
    )
  }
}

export default withRouter(App)