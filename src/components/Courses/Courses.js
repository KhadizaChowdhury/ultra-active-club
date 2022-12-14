import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Summary from '../Summary/Summary';
import './Courses.css'

const Courses = () => {
    const [courses, setAllCourses] = useState([]);
    const [list, setList] = useState([]);

    useEffect( ()=> {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setAllCourses(data))
        // .then(data => console.log(data))
    }, [])

    const addToList = (course) => {
        console.log(course);
        // list.push(course);
        const newList = [...list, course];
        setList(newList);
    }
    // const addList = () => addToList(id);

    return (
        <div className="shop_cont row gx-5">
            <div className='col-9'>
                <h1>Upgrade your skill from {courses.length} courses</h1>
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
            <div className='student col-3'>
                <Summary list={list}></Summary>
            </div>
        </div>
    );
};
export default Courses;