import './index.css'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#000000',
        primary2Color: '#ffffff'
    }
})

ReactDOM.render(
    <BrowserRouter>
        <MuiThemeProvider muiTheme={muiTheme}>
            <App />
        </MuiThemeProvider>
    </BrowserRouter>
, document.getElementById('root'))