import './App.css';
import './css/main.scss'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React, { useReducer } from 'react'

import Projects from './components/Projects'
import About from './components/About'
import Home from './components/Home'
import Nav from './components/Nav'
import Footer from './components/Footer';

import stateReducer from "./config/stateReducer"
import { StateContext } from './config/store';

function App() {

  const initialState = {
    icons: [],
    iconsOff: []
  }

  const [store, dispatch] = useReducer(stateReducer,initialState)

  return (
    <div className="App">

      <StateContext.Provider value={{store,dispatch}}>
        <Router>
            <Nav />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/projects' component={Projects} />
              <Route path='/about' component={About} />
            </Switch>
        </Router>
      </StateContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
