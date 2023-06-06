import "./main-person-card.styles.css"
import React from 'react';
import ShowMoreText from "react-show-more-text";
const MainPersonCard = (props) => {
    let cardClass = "main-person";
    const executeOnClick = (isExpanded) => {
        cardClass = "main-person main-person-expanded";
        // document.getElementById("main-person").classList.toggle("main-person-expanded");
    }

    // const minimumLength = 50;
    // const idealLength = 90;
    // const maxLength = 100;
    return (
        <div className={cardClass} id="main-person">
            <div className="talk-kind">{props.kind}</div>
            <img src={props.pic} alt="Avatar" className="main-pic"/>
            <h4 className="main-name">{props.name}</h4>
            <div className="break-line"></div>
            <h3 className="main-talkName">{props.talkName}</h3>
            <ShowMoreText
                /* Default options */
                lines={3}
                more="show more"
                less="show less"
                className="main-card-content"
                anchorClass="show-more-less-clickable"
                onClick={executeOnClick()}
                expanded={false}
                width={280}
                // truncatedEndingComponent={"... "}
            >
                <span>
                    <span>
                        <span>{props.description}</span>
                        <div>{props.personDescription}</div>
                    </span>
                </span>
            </ShowMoreText>
{/* 
            <ReadMoreReact text={props.description}
                onClick={() => {
                    console.log("show more");
                }}
                min={minimumLength}
                ideal={idealLength}
                max={maxLength}
                readMoreText="קרא עוד..."/> */}
            {/* <p>{props.shortDescription}<span className="read-more" onClick={handleReadMore}>קרא עוד...</span><span className="more"><span>{props.description}</span><div>{props.personDescription}</div></span></p> */}
            {/* <div className="main-talk-description">{props.description}</div>
            <div className="main-person-description">{props.personDescription}</div> */}
        </div>
    )
}
export default MainPersonCard;