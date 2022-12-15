import React from 'react';
import { click } from '@testing-library/user-event/dist/click';

const BreakTime = (props) => {
    const {bTime, addBreakTime} = props;
    const {id, time}= bTime;
    
    return (
            <button id='addBtn' className='addList' onClick={ () => addBreakTime(bTime)}>{time}</button>
    );
};

export default BreakTime;