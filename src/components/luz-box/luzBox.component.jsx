import "./luzBox.styles.css"
import React from 'react';
const Luz = (props) => {
if(props.person1 != null && props.person2 != null)
return (
    <div className={props.luzClass}>
    <div className="luz-time">{props.time}</div>
    <div className="luz-vertical">
    <div className="luz-activity-new">{props.activity}</div>
    <div className="luz-people">
        <div className="luz-person">{props.person1}</div>
        <div className="luz-line"></div>
        <div className="luz-person">{props.person2}</div>
        </div>
        

        {/* <div className="outer">
        <div className="inner"></div>
         */}
    </div>
    </div>
)
    return (
        <div className={props.luzClass}>
            <div className="luz-time">{props.time}</div>
            <div className="luz-activity">{props.activity}</div>
        </div>
        
    )
}
export default Luz;