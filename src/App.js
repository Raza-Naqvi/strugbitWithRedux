// import logo from './logo.svg';
import './App.css';
// import Routers from './Components/Routers/inedx';
import Home from './Components/Home';
import { Provider } from 'react-redux'
import { store } from './Store/store';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
