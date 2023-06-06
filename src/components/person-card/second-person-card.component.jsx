import "./second-person-card.styles.css"
import React from 'react';
import ShowMoreText from "react-show-more-text";
const secondPerson = (props) => {
    return (
            <div className="second-person">
                <img className="second-person-pic" src={props.pic} alt="Avatar"></img>
                <div><h3 className="second-person-talk-name">{props.talkName}</h3>
                <h4 className="second-person-name">{props.name}</h4>
                <h3 className="second-person-job">{props.job}</h3>
                </div>
                <div className="second-line"></div>
                <ShowMoreText
                /* Default options */
                lines={2}
                more="show more"
                less="show less"
                className="content-css"
                anchorClass="show-more-less-clickable"
                // onClick={handleOnClick()}
                expanded={false}
                width={290}
                // truncatedEndingComponent={"... "}
            >
                <span>
                    <span>
                        <span>{props.description}</span>
                        <div>{props.personDescription}</div>
                    </span>
                </span>
            </ShowMoreText>
            {/* <button className="sign-up-button">הרשמה</button> */}
            </div>
        
    )
}
export default secondPerson;