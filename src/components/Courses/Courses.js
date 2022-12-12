import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [courses, setAllCourses] = useState([]);
    const [time, setTime] = useState([]);

    useEffect( ()=> {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setAllCourses(data))
        .then(data => console.log(data))
    }, [])

    const addToList = (time) => {
        console.log(time, 'added')
        // time.push(course);
        const newTime = [...time, time];
        setTime(newTime);
    }
    // const addList = () => addToList(id);

    return (
        <div className="shop_cont row">
            <div className='col-9'>
                <h1>All Courses: {courses.length}</h1>
                <div className='courses row row-cols-1 row-cols-md-6 row-cols-lg-3 gx-4'>
                    {
                        courses.map(course => <Course
                            course={course}
                            addToList={addToList}
                            // unique key
                            key={course.id}
                            >
                        </Course>)
                    }
                </div>
            </div>
            <div className='col-3'>
                <h2>Order Summary</h2>
                <h3>Selected Items: {time}</h3>
            </div>
        </div>
    );
};
export default Courses;