import React from 'react';
import './App.scss';
import Landing from './Components/Login/Landing';
import firebase from 'firebase';
import  firebaseConfig  from '../src/utils/firebase'
import { Sidebar } from './Components/Sidebar/Sidebar';
import Audit from '../src/Components/Pages/Audit'
import styled from "styled-components";
import { Route, Switch, useLocation } from "react-router-dom";
import Deposit from '../src/Components/Pages/home/Deposit'
import Expense from '../src/Components/Pages/home/Expense';
import Home from '../src/Components/Pages/home/Home'

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #118df0 30%,#091227 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h2 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right,  #118df0 5%,#091227 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
 `;


function App() {
  
  const logged = true;

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }
  

  const location = useLocation();
  
  const sidebar = <>
    <Sidebar/>
    <Pages>
      {/* <AnimatePresence exitBeforeEnter> */}
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route path="/expense" component={Expense} />
          <Route path="/assets" component={Deposit} />
          <Route path="/auditlog" component={Audit} />
        </Switch>
      {/* </AnimatePresence> */}
    </Pages>
  </>

  const landing=<div className="LandingApp"><Landing/></div>



  return(
    <div className="App" >
      {logged && sidebar}
      {!logged && landing}
  </div>
  )
  
}

export default App;
