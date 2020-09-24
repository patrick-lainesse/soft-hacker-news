import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Navbar from './components/Navbar'

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <Navbar className='row'/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)