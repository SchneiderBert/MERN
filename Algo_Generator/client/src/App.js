import './App.css';
import Main from './views/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router'
import AddAlgo from './views/AddAlgo';
function App() {
  return (
    <div className="App">
      <h1 id="title">Algorithm Generator</h1>
      <Router>
      <Main path='/' />
      <AddAlgo path='/add'/>
      </Router>

    </div>
  );
}

export default App;
