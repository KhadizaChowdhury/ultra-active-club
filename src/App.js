import logo from './logo.svg';
import './App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import Courses from './components/Courses/Courses';
import Qna from './components/Qna/Qna';
// import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div className='container'>
        {/* <Button>gj</Button> */}
        <div className='container'>
          <Courses></Courses>
          <Qna></Qna>
        </div>
      </div>
    </div>
  );
}

export default App;
