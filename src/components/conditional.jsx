import React from 'react';


export default (props) => {

    return (<div>
        <span>{props.number} </span>
        {props.number % 2 === 0 ? <span>Par</span> : <span>impar</span>}
    </div>)
}