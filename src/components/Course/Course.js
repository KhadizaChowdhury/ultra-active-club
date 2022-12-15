import React from 'react';
import './Course.css'
const Course = (props) => {
    const {addToList, course} = props;
    const {id, img, name, time, age}= course;
    
    return (
        <div className='col'>
            <div className='course'>
                {/* <p>{id}</p> */}
                <div className='course-info'>
                    <img className='img-fluid' src={img} alt="" />
                    <p className='name'>{name}</p>
                    <p className='level'>Level : {age}</p>
                    <p className='time'>Time required : {time} months</p>
                </div>
                {/* Option 1
                <button onClick={addList}>Add To List</button> */}
                <button id='addBtn' className='addList' onClick={ () => addToList(course)}>Add To List</button>
            </div>
        </div>
        
    );
};

export default Course;