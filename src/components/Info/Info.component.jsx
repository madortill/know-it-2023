import "./Info.styles.css"
import React from 'react';


const Info = (props) => {

    return (
        <div className="Info">
            <h4 className="info-header blue-thing txt-thing">למי?</h4>
            <div className="info-body">{props.forWhomTxt}</div>
            <h4 className="info-header orange-thing short-txt txt-thing">איפה?</h4>
            <div className="info-body">{props.whereTxt}</div>
            <h4 className="info-header blue-thing txt-thing">מתי?</h4>
            <div className="info-body">{props.whenTxt}</div>
            <h4 className="info-header orange-thing long-txt txt-thing">מה בתוכנית?</h4>
            <div className="info-body">{props.plans}</div>
            <h4 className="info-header blue-thing txt-thing">עלות?</h4>
            <div className="info-body">{props.costs}</div>
        </div>
        
    )
}
export default Info;