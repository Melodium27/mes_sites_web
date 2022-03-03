import React,{Component} from 'react';
import logo from './logo.svg';
import './css/materialize.css';
import './App.css';
import Navbar from './components/layout/Navbar';
import OurModal from './components/layout/OurModals';

class App extends Component {

  render(){
  return (
    <div className="App">
      <Navbar />
     
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <OurModal />
        <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
 }
}

export default App;
