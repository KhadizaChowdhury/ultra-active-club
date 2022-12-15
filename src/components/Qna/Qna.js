import React from 'react';
import "./Qna.css"

const Qna = () => {
    return (
        <div class="accordion" id="accordionExample">
        <h3 class="text-center mb-5">Q&A</h3>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              How does react work?
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>ReactJS divides the UI into isolated reusable pieces of code known as components.</strong>
              <br /><br />
              <p>A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks.</p>
              <p>React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              What are the difference between props and state?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p>While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters), Props are not reactive. Whereas state is managed within the component (similar to variables declared within a function). State are variables that react will react , updating the UI when values changes.</p>
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
              <ul>
                <li><h6>Running on state change: validating input field.</h6></li>
                <p>Validating an input while it's receiving characters is another great application for useEffect. Whilst the input is being stored in a state using useState, the validation takes place every time the input changes, giving immediate feedback to the user.</p>
                <li><h6>Running on state change: live filtering</h6></li>
                <p>We can use useEffect to filter an array "on the fly" by typing letters into an input element. To do so, we will need to use a state to save the input, and a filter implementation inside the useEffect that will be triggered when the input changes, thanks to useEffect dependencies.</p>
                <li><h6>Running on state change: trigger animation on new array value.</h6></li>
                <p>We can use the useEffect hook to trigger an animation on a shopping cart as a side effect of adding a new product to it. In this case, we'll need a state to handle the cart items, and another state to handle the animation trigger.</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Qna;