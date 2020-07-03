import React from 'react';
import './card.css';

export default props =>
    <div className="hub-card">
        <div className="header">
        {props.headerContent}
        </div>
        <div className="body">
            {props.bodyContext}
            {props.children}
        </div>
        <div className="footer">
            {props.footerContent}
        </div>
    </div>