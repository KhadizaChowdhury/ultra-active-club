import React from 'react';
import './Summary.css'

const Summary = (props) => {
    const {list} = props;
    // console.log(list)

    let time =0;
    for (const course of list) {
        time = time + course.time;
    }
    return (
        <div>
            <h3>Total Time Required:{time} months</h3>
        </div>
    );
};

export default Summary;