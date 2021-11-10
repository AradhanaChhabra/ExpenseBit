import './App.scss';
import Login from './Components/Login/Login';
import { useState, useRef } from 'react';
import Register from './Components/Login/Register';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [rightsideCLass, setrightsideCLass] = useState(`right-side right`);
  const current = isLogin ? "Register" : "Login";
  const currentActive = isLogin ? "login" : "register";

  const changeState=()=> {
    if (isLogin) {
      setrightsideCLass(`right-side left`);
    }
    else {
      setrightsideCLass(`right-side right`);
    }
    setIsLogin(prevState => !prevState);
  }
  console.log(isLogin);

  return (
    <div className="App">
      <div className="login">
        <div className="container">
          {isLogin && <Login/>}
          {!isLogin&&<Register/>}
        </div>
        <RightSide
          class={rightsideCLass}
          current={current}
            currentActive={currentActive}
            onClick={changeState}
          />
      </div>
    </div>
  );
}

const RightSide = props => {
  return (
    <div
      className={props.class}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};


export default App;
