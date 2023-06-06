import "./luzBox.styles.css"
import React from 'react';
const SpecialLuz = (props) => {

    return (
        <div className={props.color}>
            <div className="luz-time">{props.time}</div>
            <div className="luz-activity">{props.activity}</div>
        </div>
        
    )
}
export default SpecialLuz;