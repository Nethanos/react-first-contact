import React from 'react'
import './second.css';


export default (props) => {
    return (<React.Fragment>
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
    </React.Fragment>)
}