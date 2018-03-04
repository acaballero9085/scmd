import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'

// Components
import Pricing from './sections/pricing/Pricing'
// import Home from './sections/home/Home'
import Samples from './sections/samples/Samples'
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

  openMenu = () => {
    this.setState({open: !this.state.open})
  }

  render() {
    const { open } = this.state
    let state = 'filler'

    if(open){
      state = 'filler-open'
    }

    return (
      <div>

        <div className='nav-container'>

          <div className='hamburger-menu' onClick={this.openMenu}>
            <i className="fas fa-bars fa-2x" style={{color: '#000'}}></i>
          </div>

          <div className='left-container'>
            <h2 className='title'>SouthCoast Music and Design</h2>

              <img className='icon' src={logo} alt='logo'></img>
          </div>

          <div className='nav-buttons-container'>
            {/* <FlatButton label="Home" labelStyle={styles.buttonLabelStyle} onClick={() => this.nav('/scmd')}/> */}
            <FlatButton label="About us" labelStyle={styles.buttonLabelStyle} onClick={() => this.nav('/')}/>
            <FlatButton label="Pricing" labelStyle={styles.buttonLabelStyle} onClick={() => this.nav('/pricing')}/>
            <FlatButton label="Sample Work" labelStyle={styles.buttonLabelStyle} onClick={() => this.nav('/samples')}/>
            <FlatButton label="Contact us" labelStyle={styles.buttonLabelStyle} onClick={() => this.nav('/contact')}/>
          </div>

          <div className='right-side'>
          </div>
          
        </div>

        <div className={state}>

          <FlatButton label="About us" labelStyle={styles.buttonLabelStyle} onClick={() => {this.nav('/'); this.setState({open: !this.state.open})}}/>
          <FlatButton label="Pricing" labelStyle={styles.buttonLabelStyle} onClick={() => {this.nav('/pricing'); this.setState({open: !this.state.open})}}/>
          <FlatButton label="Sample Work" labelStyle={styles.buttonLabelStyle} onClick={() => {this.nav('/samples'); this.setState({open: !this.state.open})}}/>
          <FlatButton label="Contact us" labelStyle={styles.buttonLabelStyle} onClick={() => {this.nav('/contact'); this.setState({open: !this.state.open})}}/>
        
        </div>

        <Switch>
          
          <Route exact path='/' component={About}/>
          <Route path='/pricing' component={Pricing}/>
          <Route path='/samples' component={Samples}/>
          <Route path='/contact' component={Contact}/>
        </Switch>

      </div>
    )
  }
}

export default withRouter(App)