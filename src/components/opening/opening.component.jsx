import "./opening.styles.css"
import Slider from "../slider/slider.component";
import CountdownTimer from "../countdown/CountdownTimer.component";
import { useNavigate } from "react-router-dom";
import AddToCalendar from "../add-to-calendar/add-to-calendar.component";
import Luz from "../luz/luz.component";
import Info from "../Info/Info.component";
import React, { useState, useEffect } from 'react';
import Email from "../email/email.component";
import video from "../../media/intro_video.mp4";
const Opening = (props) => {
    const DATA = [
        {
            "opening-txt": "אנו מתרגשים להזמינכם לכנס ה-4 בנושא חדשנות בלמידה, כנס מיוחד וחוויתי שמחבר מגזרים שונים למכנה משותף - חדשנות בלמידה. מהרו להירשם, מספר המקומות מוגבל!",
            "for-whom-txt": "כ-1000 מפתחי ומנהלי הדרכה מיחידות צה״ל, מהאקדמיה ומגופי הדרכה נוספים במגזר הציבורי, הפרטי והבטחוני. ",
            "where-txt": "קריית ההדרכה (עיר הבה״דים) - מחנה אריאל שרון. לטובת המשתפים יועמד שירות הסעות ממספר מקומות מרכזיים.",
            "when-txt": "הכנס יתקיים ביום שלישי ה-22 בנובמבר 2022 בין השעות 8:00-14:15.",
            "plans": " הרצאות מעוררות השראה, סדנאות ייחודיות, תערוכת ספקים מגוונת, חשיפה לאמצעים דיגיטליים חדשניים ואוכל טוב.",
            "costs": "ההשתתפות בכנס הינה ללא עלות.",
        }
        ];
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="opening">
        <div className="shluglug1"></div>
        
            {/* <Slider /> */}
            <video controls width="100%" className="intro-video">
                <source src={video} type="video/mp4" />
                    Sorry, your browser doesn't support embedded videos.
            </video>
            <h1 className="main-header">כנס חדשנות בלמידה</h1>
            <div className="opening-txt">מנהלים ואנשי פיתוח למידה, קריית ההדרכה גאה להזמינכם לכנס ייחודי ומיוחד במינו בנושא חדשנות בלמידה.</div>
            <button className="btn-primary primary-edit" onClick={() => console.log("ss")}>להרשמה</button>
            <CountdownTimer targetDate={props.targetDate} />
            <div className="opening-txt1"> הכנס מיועד למפתחי הדרכה בכירים, מנהלי הדרכה בארגון, אנשי חינוך, הוראה ולמידה בצה"ל, כוחות הבטחון השונים, אקדמיה, גופי חינוך ולמידה בארגונים השונים.</div>
            
            
            <div className="opening-txt2">הכנס יתקיים בתאריך 22.11.2022 <br></br>בקריית ההדרכה.</div>
            <AddToCalendar/>
            <Info OpeningTxt={DATA[0]["opening-txt"]} costs={DATA[0]["costs"]} forWhomTxt={DATA[0]["for-whom-txt"]} whereTxt={DATA[0]["where-txt"]} whenTxt={DATA[0]["when-txt"]} plans={DATA[0]["plans"]}/>
            <Luz />
            <Email></Email>
            <div className="shluglug2"></div>
        </div>
        
    )
}
export default Opening;