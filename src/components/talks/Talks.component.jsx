import "./Talks.styles.css"
import PersonCard from "../person-card/main-person-card.component";
import SecondPersonCard from "../person-card/second-person-card.component";
import React, { useEffect } from 'react';
import guest1 from '../../media/guest_16.svg';
import guest2 from '../../media/guest_19.png';
import guest3 from '../../media/guest_3@600x.png';
import guest4 from '../../media/guest_4@600x.png';
import guest5 from '../../media/guest_5@600x.png';
import guest6 from '../../media/guest_6@600x.png';
import guest7 from '../../media/guest_17.svg';
import guest8 from '../../media/guest_25.png';
import guest9 from '../../media/guest_9@600x.png';
import guest10 from '../../media/guest_26.png';
import guest11 from '../../media/guest_18.svg';
import guest12 from '../../media/guest_21.png';
import guest13 from '../../media/guest_23.png';
import guest14 from '../../media/guest_24.png';
import guest15 from '../../media/guest_27.png';
import guest16 from '../../media/guest_28.png';
// import React, { useState } from "react";
import Email from "../email/email.component";
const Talks = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    const OPENING_TALK_INFO = [
        {
            "kind": "הרצאת פתיחה",
            "opening-talk-name": "Metaverse: האינטרנט החדש - קווים לדמותו", 
            "opening-talk-person": "מר משה רדמן",
            "opening-talk-pic": guest9,
            "opening-talk-person-info": "משה רדמן הוא מנכ״ל Anyverse Studio ומומחה בינ״ל לחדשנות ושיווק עם ניסיון עשיר בליווי חברות בארץ ובעולם בבניית כלים ויכולות למול התפתחויות טכנולוגיות עתידיות.",
            "opening-talk-sum": "במסגרת ההרצאה נעסוק בקשר בין המטאוורס ומציאות מדומה ורבודה לבין Web3.0 ובכלל נשרטט קווים לדמותו של האינטרנט בגרסתו החדשה כפי שהיא מסתמנת בשנים הקרובות. ",
        },
        {
            "kind": "הרצאת סיום",
            "opening-talk-name": "ארבעה מיתוסים על חדשנות", 
            "opening-talk-person": "ד״ר יובל דרור",
            "opening-talk-pic": guest6,
            "opening-talk-person-info": 'אחרי שני עשורים שבהן סיקר ועקב אחר חברות הטכנולוגיה המובילות בעולם ולאחר שכתב וחקר את הנושא בעצמו, ד"ר יובל דרור ראה כמעט את כל הטעויות האפשריות בדרך אל חדשנות, כמו גם כמה הצלחות מרשימות.',
            "opening-talk-sum":  'יותר מ-75 אלף ספרים ומיליוני עמודים נכתבו רק בעשור האחרון על “חדשנות” (Innovation) “יצירתיות" (Creativity). אין פלא שסביב המונח "חדשנות" נקשרו כתרים ונוצרו מיתוסים, חלקם הלא מבוטל שגויים ואפילו מזיקים. בהרצאה “ארבעה מיתוסים על חדשנות” נפרק את ארבעת המיתוסים הגדולים ביותר סביב המונח "חדשנות”. ',
        },
        {
            "kind": "",
            "opening-talk-name": "חוזים קדימה",
            "opening-talk-person": "ד״ר עדי וגרהוף אשכנזי וריבי ארצי",
            "opening-talk-pic": guest15,
            "opening-talk-person-info": 'ריבי ארצי, מנהלת מחלקת הפיתוח באגף מו"פ משה"ח, עוסקת בהובלת שינויים  מוטי עתיד בארגוניים חינוכיים, בעיצוב עתיד רצוי מבוסס תהליכי חשיבת עתיד ובבניית קונספטים חינוכיים חדשניים. וד”ר עדי וגרהוף אשכנזי, חוקרת במכון לחקר עתידים בחינוך מטעם אגף המו"פ, משה"ח. בעלת תואר ראשון בהנדסה כימית, B.Sc מהטכניון, תואר שני M.Sc בהנדסת חומרים מאוניברסיטת תל אביב ודוקטורט PhD בהנדסת חשמל, מאוניברסיטת בר אילן.',
            "opening-talk-sum": "הרצאה דינמית המציגה מגמות עתיד בדגש על מגמות בחינוך, את הכשירויות הנדרשות מהאדם על מנת להתמודד עם המציאות המשתנה, בהרצאה גם נכיר את מאפייני דור האלפא, שעבורו אנו משתנים.",
        },
        {
            "kind": "",
            "opening-talk-name": "חדשנות וטכנולוגיה – הסיפור של Amazon",
            "opening-talk-person": "בועז זינמן",
            "opening-talk-pic": guest13,
            "opening-talk-person-info": "בועז זינימן הוא Principal Developer Advocate בצוות הישראלי של AWS, חטיבת שרותי הענן של אמזון. במסגרת תפקידו, בועז עוזר לחברות להבין טוב יותר את הפוטנציאל של מחשוב ענן והשירותים השונים של AWS. לבועז עשרות שנות ניסיון בפיתוח, תפעול, ארכיטקטורה וניהול IT במגוון גדול של חברות טכנולוגיה מובילות בישראל.",
            "opening-talk-sum": "מבט על דרכי עבודה ומתודולוגיות שאומצו על ידי Amazon על מנת לחדש על בסיס יומי בכל תחום בו החברה פועלת. החל מגודל הצוות ועד הדרך בה מנהלים ישיבות, שיטות שאולי יום אחד תרצו לאמץ בארגון שלכם.",
        }
        ];
        const TALKS_INFO = [
            {
                "talkName": "כיתת העתיד: מעבדת הדימיון, בינה מלאכותית - המחר כבר כאן",
                "talkPerson": "ד״ר עמיר גפן ואורי בן ארי",
                "job": "",
                "talkPic": guest16,
                "talkPersonInfo": "ד״ר עמיר גפן, מרצה לטכנולוגיות למידה באקדמית רמת גן ומנהל מעבדה לבינה מלאכותית באגף מו״פ במשרד החינוך. בנוסף מתמחה בהיבטים של מוגנות ומניעת פגיעה ברשת. ואורי בן-ארי, מנהל עסקים גלובלי בעל ניסיון של כ-30 שנה ביזמות וניהול ברמות בכירות בעסקים ותאגידים. אורי הינו מומחה לנושא ״ערים חכמות״, והקים ב2007 עמותה ״קרן אתנה״, להעצמת מורי ישראל.",
                "talkSum": "במסגרת המושב יציג אורי בן ארי את כיתת העתיד, כית למידה אופפת ״מעבדת הדימיון״ של קרן אתנה. הכיתה מציגה תוכן של מציאות מדומה בשלושה ממדים ובאלפי נושאים. תוך אפשרות ליצירת אינטרקטיביות עם התוכן לשאלות ותשובות ומעברים לפרטי תוכן נוספים. על המערכת ניתן ליצור מערכי שיעור, סימולטורים וחדרי בריחה, ולבקר בכל מקום בעולם בצורה שטרם נראתה. המערכת מאפשרת ללמוד לבד ולענות בצורה אינטרקטיבית על שאלות שקשורות לתוכן. ד״ר עמיר גפן יציג כיצד טכנולוגיית בינה מלאכותית יכולה לסייע בניתוח הלמידה ובקידום למידה מותאמת אישית.",
            },
            {
                "talkName": "יתרונות בחשיבה עיצובית UX, UI ",
                "talkPerson": "דור סגיב",
                "job": "",
                "talkPic": guest5,
                "talkPersonInfo": " היי!, אני דור סגיב מעצב ומושייניסט. מתעסק בעיצוב ויזואלי, אנימציות מושיין, עיצוב מוצר ותהליכי מיתוג. כיום מועסק ב-Studio&more סטודיו לעיצוב ומיתוג סטארטאפים וחברות הייטק.",
                "talkSum": "בהרצאה אנחנו נסתכל על איך חשיבה ויזואלית ובנייה של קונספטים מבוססי עיצוב תיצור את חווית המשתמש, אכיר לכם את הליך העבודה שלי ובו תשמעו על כלים, צורת העבודה, ניהול פרויקט מקונספט ויזואלי ועד גימור העיצוב ואיך להנות בתהליך.",
            },
            {
                "talkName": "סדנת שימוש במחולל המשחקים ClapLab",
                "talkPerson": "חגית חזני",
                "job": "",
                "talkPic": guest1,
                "talkPersonInfo": "את הסדנה תעביר חגית חזני - מנהלת המוצר",
                "talkSum": "בסדנה ניצור משחקים אישיים וקבוצתיים שתוכלו להשתמש בהם בהדרכות שלכם או לשלוח למשתמשים שישחקו וילמדו מהמכשירים שלהם.",
            },
            {
                "talkName": "סקילבילדרז",
                "talkPerson": "אסף כהן",
                "job": "Amazon Web Services",
                "talkPic": guest10,
                "talkPersonInfo": "אסף כהן הוא Training Delivery Manager בחברת AWS, הוא בעל רקע טכנולוגי עשיר עם נסיון של מעל 20 שנה בתחום ההיי-טק ואף עבד כמדריך  ב-10 שנים האחרונות בתחומי הענן ואבטחת מידע.",
                "talkSum": "תקופת הקורונה שינתה את פני המפה והכריחה ארגונים להסתגל ולהתאים את שיטות ההדרכה שלהם. הסשן יעסוק בהתמודדות עם האתגרים השונים בהקניית ידע בעולמות הדיגיטליים והפתרונות בהם ארגונים משתמשים כדי לגשת אל קהל מגוון וגלובלי בקנה מידה גדול.",
            },
            {
                "talkName": "על רשתות חברתיות, צה״ל, ומה שביניהם",
                "talkPerson": "זוהר ראובני",
                "job": "חיל החינוך",
                "talkPic": guest3,
                "talkPersonInfo": "זוהר ראובני, ראש תחום דיגיטל בחיל החינוך והנוער.",
                "talkSum": 'אנחנו יודעים שאתם גם ככה אף פעם לא מכבים את המכשירים הניידים שלכם, אז בואו ניעזר בהם. הצטרפו אליי לשעה וחצי של סדנה מיוחדת בה תגלו איך באמצעות המכשיר שצמוד אליכם כל היום, תוכלו לספר את הסיפור הטוב ביותר, לקהל היעד הנכון ביותר, בפלטפורמה הטובה ביותר. ניעזר בכלים דיגיטליים אינטראקטיביים שיסייעו לנו לספר את הסיפורים שלנו, נעמיק במערכת היחסים של צה״ל עם הרשתות החברתיות. נלמד איך לנהל קהילות וגם על כל מה ש״חם״ היום ברשתות החברתיות.',
            },
            {
                "talkName": "החיים כמשחק",
                "talkPerson": "עמי חניא",
                "job": "מנכ״ל ומייסד חברת CloseApp",
                "talkPic": guest11,
                "talkPersonInfo": "עמי חניא הוא מנכ״ל ובעלים של חברת CloseApp המפתחת משחקים, ולהטוטן אש. משתדל לחיות את המשחק.",
                "talkSum": "בהרצאה נגלה מהו משחק, איך המשחק משנה חיים, והאם שינוי התנהגות אפשרי באמצעות משחק. נשחק במשחקים, נראה דוגמאות למשחוק ונכין מתכון למשחק מנצח!",
            },
            {
                "talkName": "לשלב כלים דיגיטלים בהוראה, כל אחד יכול",
                "talkPerson": "רס״ל אביב ואנונו",
                "job": "",
                "talkPic": guest8,
                "talkPersonInfo": "",
                "talkSum": "עולם ההוראה הפורנטלי כולל בתוכו כל כך הרבה קשיים הדורשים מאיתנו להזיז את הגבינה ולשבור קצת מההדרכה המסורתית על מנת לייעל את תהליכי הלמידה של כלל הלומדים. בהרצאה ניחשף למגוון קשיים הדרכתיים שאותם נוכל לפתור במגוון הכלים הדיגטילים בהם כל אחד יוכל להשתמש, לפתח, להטמיע ולשלב שיטות ואמצעים חדשניים ביותר. ונחשו מה, עם הכלים הדיגטלים של 2022 כל אחד יכול.",
            },
            {
                "talkName": "אבחון ופיתוח מיומנויות חשיבה באמצעות משחקים ובינה מלאכותית",
                "talkPerson": "נדב אגוזי",
                "job": "",
                "talkPic": guest7,
                "talkPersonInfo": "מאז היווסדה בשנת 1994, חברת Accelium היא חלוצה בתחום החינוך וההדרכה מבוססי-משחק. בלב פעילותנו עומדת מתודולוגיה ייחודית הרותמת את החוויה הסוחפת של עולם המשחק לטובת הוראה של מודלים וכלי חשיבה שימושיים לאבחון ופיתוח מיומנויות חשיבה באמצעות משחקים ובינה מלאכותית מסדר גבוה.",
                "talkSum": "בהרצאה נעסוק באבחון מיומנויות באמצעות בינה מלאכותית מבוססת משחק. נלמד כלים חדשניים להבנת חוזקות וחולשות מחשבתיים, להתאמה תעסוקתית ולהדרכה.",
            },
            {
                "talkName": "עוד פעם לומדה?",
                "talkPerson": "יעל דורון כהן, מנהלת תחום L&D ועומרי אברהם, מנהל פרויקטים ומוביל מקצועי",
                "job": "Playscape Group",
                "talkPic": guest2,
                "talkPersonInfo": "",
                "talkSum": "עובדים ואנשי למידה מדמיינים לומדה ועולים להם זיכרונות קשים - מיליון שקפים! ומה עם השעמום?!עולם הלמידה הדיגיטלי התפתח מאוד, מה לא התפתח? התפיסה של מהי 'לומדה' בואו להציץ לצורת חשיבה שתפתח לכם משהו בראש. אבל לא בקטע אלים. במושב נדבר על :  איך נראה פיצוח בעידן החדש, איך נראה תהליך קריאטיבי עד לגיבוש קונספט  איך משלבים כלי פיתוח נוספים כדי להגיע לפעולת למידה משמעותית וחוויתית. הלומד נהיה אדיש לתהליך הלמידה ומתפלל שזה יגמר. נשמע לכם מוכר?",
            },
            {
                "talkName": "שמעו סיפור - כלים לשימוש בסטוריטלינג בלמידה",
                "talkPerson": "נעם הרץ ושקמה בוכריס קוטוב",
                "job": "GADA",
                "talkPic": guest4,
                "talkPersonInfo": "",
                "talkSum": "סטוריטלינג היא אומנות הקיימת משחר האנושות, המוח שלנו, בני האדם, בנוי בצורה שנועדה להבין, להנות ולזכור סיפור טוב. בואו לחקור יחד איתנו את המנגנון המדהים שאחראי על זה ולאמץ כלים ליצירת למידה איכותית וחווייתית מבוססת סטוריטלינג.",
            },
            {
                "talkName": "טרנדים בעולם ה- Edtech",
                "talkPerson": "אראלה משה",
                "job": "MindCet",
                "talkPic": guest14,
                "talkPersonInfo": "",
                "talkSum": "מציאות מדומה ובינה מלאכותית הן המילים החמות היום ונדמה לכולנו כי אנחנו יודעים מה אפשר לעשות באמצעותן- אבל מה לגבי למידת אמפתיה בVR? ואיך נשתמש בכלים טכנולוגיים למדידת המצב הרגשי חברתי של התלמיד? בכל זאת ועוד עוסקים בMindCet, חברת הבת של מטח שבעזרת המתודולוגיה של עולם הסטארט-אפים מובילה את עולם הedtech בארץ ובעולם.",
            },
        ];
    return (
        <div className="talks">
            <h2 className="talks-header">הרצאות מליאה</h2>
            <PersonCard pic={OPENING_TALK_INFO[0]["opening-talk-pic"]} name={OPENING_TALK_INFO[0]["opening-talk-person"]} talkName={OPENING_TALK_INFO[0]["opening-talk-name"]} description={OPENING_TALK_INFO[0]["opening-talk-sum"]} personDescription={OPENING_TALK_INFO[0]["opening-talk-person-info"]} kind={OPENING_TALK_INFO[0]["kind"]}></PersonCard>
            <PersonCard pic={OPENING_TALK_INFO[1]["opening-talk-pic"]} name={OPENING_TALK_INFO[1]["opening-talk-person"]} talkName={OPENING_TALK_INFO[1]["opening-talk-name"]} description={OPENING_TALK_INFO[1]["opening-talk-sum"]} personDescription={OPENING_TALK_INFO[1]["opening-talk-person-info"]} kind={OPENING_TALK_INFO[1]["kind"]}></PersonCard>
            {/* <h2 className="talks-header">הרצאת בכירים</h2> */}
            <PersonCard pic={OPENING_TALK_INFO[2]["opening-talk-pic"]} name={OPENING_TALK_INFO[2]["opening-talk-person"]} talkName={OPENING_TALK_INFO[2]["opening-talk-name"]} description={OPENING_TALK_INFO[2]["opening-talk-sum"]} personDescription={OPENING_TALK_INFO[2]["opening-talk-person-info"]} kind={OPENING_TALK_INFO[2]["kind"]}></PersonCard>
            <PersonCard pic={OPENING_TALK_INFO[3]["opening-talk-pic"]} name={OPENING_TALK_INFO[3]["opening-talk-person"]} talkName={OPENING_TALK_INFO[3]["opening-talk-name"]} description={OPENING_TALK_INFO[3]["opening-talk-sum"]} personDescription={OPENING_TALK_INFO[3]["opening-talk-person-info"]} kind={OPENING_TALK_INFO[3]["kind"]}></PersonCard>
            <h2 className="talks-header">רשימת המרצים</h2>
            <div className="talks-list">
                {TALKS_INFO.map((index) => {
                    const { talkName, talkPerson, talkPic, talkPersonInfo, talkSum, job } = index;
                    return (
                        <SecondPersonCard key={talkName} job={job} pic={talkPic} name={talkPerson} talkName={talkName} description={talkSum} personDescription={talkPersonInfo}></SecondPersonCard>
                    );
                })}
            </div>

            {/* <SecondPersonCard pic={TALKS_INFO[0]["talk-pic"]} name={TALKS_INFO[0]["talk-person"]} talkName={TALKS_INFO[0]["talk-name"]} description={[TALKS_INFO[0]["talk-sum"]]} personDescription={TALKS_INFO[0]["talk-person-info"]}></SecondPersonCard> */}
            <Email></Email>
        </div>
        
    )
}
export default Talks;

