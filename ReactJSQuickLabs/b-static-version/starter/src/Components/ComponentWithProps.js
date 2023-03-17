import React from "react";

const ComponentWithProps = props => {
    return (
        <>
        <h1>{props.header}</h1>
        <p>{props.content}</p>
        <p>Look at this number: {props.number} - Ahhhhh!</p>
        <p>What have we here? {props.nonexistent} - Nothing, that's what</p>
        </>
    )
};

export default ComponentWithProps;