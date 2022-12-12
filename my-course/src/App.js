import logo from './logo.svg';
import './App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import Courses from './components/Courses/Courses';
// import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div className='container'>
        {/* <Button>gj</Button> */}
        <Courses></Courses>
      </div>
    </div>
  );
}

export default App;
