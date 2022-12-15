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
        <div className='container'>
          <Courses></Courses>
        </div>
        <div class="container accordion my-5" id="accordionExample">
        <h3 class="text-center mb-5">Q&A</h3>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              What are the difference between var, let and const?
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>All three variables differ in the following cases:</strong>
              <br></br>
              <b>1. Assignment</b>
              <ul>
                <li>let and var can be reassigned to a new value while const cannot be reassigned.</li>
              </ul>
              <b>2. Scope</b>
              <ul>
                <li>var is function-scoped.</li>
                <li>let and const are block-scoped(any code within {} braces).</li>
                <li>Here is an article on Understanding Scope in Javascript.</li>
              </ul>
              <b>3.Hoisting</b>
              <ul>
                <li>let and const is also hoisted but will throw an error if the variable is used before the declaration. It is a little complicated and we will discuss it in a separate article dedicated to this specific topic.</li>
                <li>var is always hoisted to the top of their respective scope.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              What are the difference between regular function and arrow function?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>Regular vs Arrow Functions:</strong>
              <br></br>
              <b><i>1. this</i> binding</b>
              <ul>
                <li>Regular functions have their own dynamic this binding, while arrow functions do not have their own this.</li>
                <li>The value of this inside an arrow function remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest non-arrow parent function.</li>
              </ul>
              <b>2. Arguments Object.</b>
              <ul>
                <li>In regular JavaScript functions, arguments keywords can be used to access the passed arguments when the function is invoked.</li>
                <li>But, arrow functions do not have their own arguments and it uses the arguments from the outer function.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Why should we use template string?
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>Template strings are a powerful feature of modern JavaScript released in ES6.</strong> It lets us insert/interpolate variables and expressions into strings without needing to concatenate like in older versions of JavaScript. It allows us to create strings that are complex and contain dynamic elements.Another great thing that comes with template strings are tags. Tags are functions that take a string and the decomposed parts of the string as…
              <p>The syntax for creating template strings is by using backticks to delimit them.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
