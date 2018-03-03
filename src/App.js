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

              <img className='icon' src='/images/logo.png' alt='logo'></img>
          </div>

          <div className='nav-buttons-container'>
            {/* <FlatButton label="Home" labelStyle={styles.buttonLabelStyle} onClick={() => this.nav('/scmd')}/> */}
            <FlatButton label="About us" labelStyle={styles.buttonLabelStyle} onClick={() => this.nav('/scmd/about')}/>
            <FlatButton label="Pricing" labelStyle={styles.buttonLabelStyle} onClick={() => this.nav('/scmd/pricing')}/>
            <FlatButton label="Sample Work" labelStyle={styles.buttonLabelStyle} onClick={() => this.nav('/scmd/samples')}/>
            <FlatButton label="Contact us" labelStyle={styles.buttonLabelStyle} onClick={() => this.nav('/scmd/contact')}/>
          </div>

          <div className='right-side'>
          </div>
          
        </div>

        <div className={state}>

          <FlatButton label="About us" labelStyle={styles.buttonLabelStyle} onClick={() => {this.nav('/scmd/about'); this.setState({open: !this.state.open})}}/>
          <FlatButton label="Pricing" labelStyle={styles.buttonLabelStyle} onClick={() => {this.nav('/scmd/pricing'); this.setState({open: !this.state.open})}}/>
          <FlatButton label="Sample Work" labelStyle={styles.buttonLabelStyle} onClick={() => {this.nav('/scmd/samples'); this.setState({open: !this.state.open})}}/>
          <FlatButton label="Contact us" labelStyle={styles.buttonLabelStyle} onClick={() => {this.nav('/scmd/contact'); this.setState({open: !this.state.open})}}/>
        
        </div>

        <Switch>
          
          <Route exact path='/scmd' render={() => (
            <Redirect to="/scmd/about"/>
          )}/>
          <Route path='/scmd/about' component={About}/>
          <Route path='/scmd/pricing' component={Pricing}/>
          <Route path='/scmd/samples' component={Samples}/>
          <Route path='/scmd/contact' component={Contact}/>
        </Switch>

      </div>
    )
  }
}

export default withRouter(App)