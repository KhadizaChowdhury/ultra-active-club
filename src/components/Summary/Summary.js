import React from 'react';
import './Summary.css'

const Summary = (props) => {
    const {list} = props;
    // console.log(list)

    const numbers = [10, 15, 20, 30];
    const listItems = numbers.map((number) =>
    <button>{number}</button>
    );

    let time =0;
    for (const course of list) {
        time = time + course.time;
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className="d-inline-block w-25">
                    <img className='img-fluid' src="img/avatar.png" alt="" />
                </div>
                <div className="d-inline-block p-2"><h3>Aidah Yildiz</h3>
                    <div>Istanbul, Turkey</div>
                </div>
            </div>
            <div className="row info">
                <div className="col-sm">
                    <span className='p-info'>55</span><span>kg</span>
                    <p>Weight</p>
                </div>
                <div className="col-sm">
                    <span className='p-info'>5'7</span>
                    <p>Height</p>
                </div>
                <div className="col-sm">
                    <span className='p-info'>18</span><span>kg</span>
                    <p>Age</p>
                </div>
            </div>
            <h5>Add a Break</h5>
            <div className="row info">
                <div className="col-sm">
                <ul>{listItems}</ul>
                </div>
            </div>
            <h5>Course Details</h5>
            <div className="info">
                <p>Total Time Required:{time} months</p>
            </div>
            <div className="info">
                <p>Break time:{time}</p>
            </div>
        </div>
    );
};

export default Summary;