import React from 'react';

// a parent component is a compenent that calls another component from within thier own return statement
// 

// only retains design/layout? and matching keys for values in App.js
// component
const PersonCard = (props) => {
    return (
        <>
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
        </>
    )
}







// declare props key value pairs -- it is done automatically by React (javascript object named props)
// const props = {
//     firstName: "Jane",
//     lastName: "Doe",
//     age: "45",
//     hairColor: "Black"
// }

export default PersonCard;