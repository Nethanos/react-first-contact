import React from 'react';

export default (props) => 
    <React.Fragment>
        <h2>Filhos:</h2>
        <div>
            {props.children}
        </div>
    </React.Fragment>
