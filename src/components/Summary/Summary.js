import React, { useEffect, useState } from 'react';
import './Summary.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BreakTime from '../BreakTime/BreakTime';

const Summary = (props) => {
    const {list} = props;
    // const {time}= bTime;
    const [breakTimes, setBreakTime] = useState([]);
    const [brkTime, setTime] = useState([]);
    const courseComplete = () => 
        toast("Congratulations! Wishing you a very successful Life");

    useEffect( ()=> {
        fetch('breaktime.json')
        .then(res => res.json())
        .then(data => setBreakTime(data))
        // .then(data => console.log(data))
    }, [])
    // console.log(brTime)
    const addBreakTime = (bTime) => {
        console.log(bTime.time);
        // const newTime = [...brkTime, bTime];
        const newTime = [bTime];
        setTime(newTime);
    }
    let cTime =0;
    for (const course of list) {
        cTime = cTime + course.time;
    }
    let brTime = 0;
    for (const bTime of brkTime) {
        if(!brTime===0){
            brTime = bTime.time;
        }
        else{
            brTime = bTime.time;
            localStorage.setItem("breaktime", JSON.stringify(brTime))
        }
    }

    return (
        <div className='summary'>
            <div className='d-flex align-items-center'>
                <div className="d-inline-block w-25">
                    <img className='img-fluid' src="img/avatar.png" alt="" />
                </div>
                <div className="d-inline-block p-2"><h3>Aidah Yildiz</h3>
                    <div><FontAwesomeIcon icon={faLocationDot} /><span className='location'>Istanbul, Turkey</span></div>
                </div>
            </div>
            <div className='summary-info'>
                <div className="row prl-info">
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
                <h5>Break Time:</h5>
                <div className="info">
                {
                    breakTimes.map(bTime => <BreakTime
                        bTime={bTime}
                        addBreakTime={addBreakTime}
                        // unique key
                        key={bTime.id}
                        >
                    </BreakTime>)
                }
                </div>
                <h5>Course Details</h5>
                <div className="info">
                    <h6>Total Time Required: <span className='time'>{cTime} months</span></h6>
                </div>
                <div className="info">
                <h6>Break Time: <span className='time'>{brTime} days</span></h6>
                </div>
                <button className='completed' onClick={courseComplete}>Activity Complited</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Summary;