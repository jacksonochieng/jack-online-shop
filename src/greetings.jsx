import React, { useState } from 'react';
const Greetings=()=>{
    const [Count, setCount]=useState(0)
    function add(){
        setCount(Count + 1)
    }
    function subtract(){
        setCount(Count - 1)
    }
    return(
        <div className="counter">
            <button className='minus' onClick={subtract}>-</button>
            <div className="count">
                <p>{Count}</p>
                </div>
            <button className="plus" onClick={add}>+</button>
        </div>
    )
}
export default Greetings;