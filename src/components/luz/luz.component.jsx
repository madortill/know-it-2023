import "./luz.styles.css"
import React from 'react';
import LuzBox from "../luz-box/luzBox.component";
const Luz = (props) => {
    const LUZ_DATA = [
        {
            "time": "8:00 - 9:15",
            "activity": "הרשמה | ארוחת בוקר | סיור בתערוכה",
            "class": "blue-bg luz-box"
        },
        {
            "time": "9:15 - 9:45",
            "activity": "דברי פתיחה | רע״ן הדרכה",
            "person1": "רע״ן הדרכה ",
            "person2": "ד״ר יעקב הכט",
            "class": "orange-bg luz-box",
        },
        {
            "time": "9:45 - 10:30",
            "activity": "״Metaverse: האינטרנט החדש קווים לדמותו״ - משה רדמן",
            "class": "blue-bg luz-box"
        },
        {
            "time": "10:45 - 11:00",
            "activity": "הפסקה | סיור בתערוכה",
            "class": "orange-bg luz-box"
        },
        {
            "time": "11:00 - 11:45",
            "activity": "מושב 1",
            "class": "blue-bg luz-box"
        },
        {
            "time": "12:00 - 12:45",
            "activity": "מושב 2",
            "class": "orange-bg luz-box"
        },
        {
            "time": "13:00 - 14:00",
            "activity": "״מיתוסים על חדשנות״ - ד״ר יובל דרור",
            "class": "blue-bg luz-box"
        },
        {
            "time": "14:00 - 14:15",
            "activity": "סיכום מפקד",
            "class": "orange-bg luz-box"
        },
        {
            "time": "14:15",
            "activity": "ארוחת צהרים | פיזור",
            "class": "blue-bg luz-box"
        },
    ]
    return (
        <div className="luz">
            <div className="talks-header">הלו״ז היומי</div>
            <LuzBox luzClass={LUZ_DATA[0]["class"]} activity={LUZ_DATA[0]["activity"]} time={LUZ_DATA[0]["time"]}></LuzBox>
            <LuzBox luzClass={LUZ_DATA[1]["class"]} activity={LUZ_DATA[1]["activity"]} person1={LUZ_DATA[1]["person1"]}  time={LUZ_DATA[1]["time"]}></LuzBox>
            <LuzBox luzClass={LUZ_DATA[0]["class"]} activity={LUZ_DATA[2]["activity"]} time={LUZ_DATA[2]["time"]}></LuzBox>
            <LuzBox luzClass={LUZ_DATA[0]["class"]} activity={LUZ_DATA[3]["activity"]} time={LUZ_DATA[3]["time"]}></LuzBox>
            <LuzBox luzClass={LUZ_DATA[0]["class"]} activity={LUZ_DATA[4]["activity"]} time={LUZ_DATA[4]["time"]}></LuzBox>
            <LuzBox luzClass={LUZ_DATA[0]["class"]} activity={LUZ_DATA[5]["activity"]} time={LUZ_DATA[5]["time"]}></LuzBox>
            <LuzBox luzClass={LUZ_DATA[0]["class"]} activity={LUZ_DATA[6]["activity"]} time={LUZ_DATA[6]["time"]}></LuzBox>
            <LuzBox luzClass={LUZ_DATA[0]["class"]} activity={LUZ_DATA[7]["activity"]} time={LUZ_DATA[7]["time"]}></LuzBox>
            <LuzBox luzClass={LUZ_DATA[0]["class"]} activity={LUZ_DATA[8]["activity"]} time={LUZ_DATA[8]["time"]}></LuzBox>
        </div>
        
    )
}
export default Luz;