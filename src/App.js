import './App.scss';
//import Landing from './Components/Login/Landing';
import firebase from 'firebase';
import  firebaseConfig  from '../src/utils/firebase'
import { Sidebar } from './Components/Sidebar/Sidebar';

function App() {

  //setting the state of the service getter type


  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }
  

  return (
    <div className="App">
      {/* <div className="LandingApp"><Landing /></div> */}
      <Sidebar/>
    </div>
  );
}




export default App;
