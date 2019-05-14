import React, { Component } from 'react';
import {connect} from 'react-redux';
import {increment,decrement} from '../Action/Action';

let Counter=({stateObj,inc,dec})=>{

    return <div>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
        <label>Count:{stateObj.counter}</label>
    </div>

}

const mapStateToProps=(state)=>({
    stateObj:state
});

const mapDispatchToProps=(dispath)=>({
    increment:()=>{dispath(increment())},
    decrement:()=>{dispath(decrement())}
});

Counter=connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default Counter;

