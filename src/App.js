import './App.scss';
import Landing from './Components/Login/Landing';
import firebase from 'firebase';
import { firebaseConfig } from '../src/utils/firebase'

function App() {

  //setting the state of the service getter type


  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    
    
 }else {
    firebase.app(); // if already initialized, use that one
 }
  

  return (
    <div className="App">
      <Landing/>
    </div>
  );
}




export default App;
