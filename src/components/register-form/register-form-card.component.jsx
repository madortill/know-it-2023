import { useState, useEffect } from "react";
import "./register-form-card.styles.css";
import database from "../../firebase/firebase";
// import { getDatabase, ref, push, set } from "firebase/database";
import {
  getFirestore,
  collection,
  query,
  doc,
  where,
  setDoc,
  arrayUnion,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Email from "../email/email.component";
import React from "react";

const db = getFirestore();

const RegisterFormCard = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // handleParticipants();
  }, []);

  const [showTxtField, setTxtField] = useState(false);
  const [isFirstSadna, setFirstOneSeat] = useState(false);
  const [isSecondSadna, setSecondOneSeat] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [darga, setDarga] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("05");
  const [id, setId] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [firstSeat, setFirstSeat] = useState("");
  const [secondSeat, setSecondSeat] = useState("");
  const [role, setRole] = useState("");
  const [reason, setReason] = useState("אנא בדוק את הטופס");
  var successMessage = "ההרשמה נקלטה במערכת, פרטים נוספים ישלחו בהמשך.";


  async function submit(e) {
    e.preventDefault();
    var reason = await checkReason();
    setReason(reason);
    if (reason === successMessage) {
      const collectionRef = doc(db, "users", phone.toString());
      setDoc(
        collectionRef,
        {
          name: name,
          company: company,
          darga: darga,
          email: email,
          phone: phone,
          id: id,
          role: role,
          companyType: companyType,
          firstSeat: firstSeat,
          secondSeat: secondSeat,
        },
        { merge: true }
      );
      popUpDone();
      // handleParticipants();
      setName("");
      setCompany("");
      setDarga("");
      setEmail("");
      setPhone("");
      setId("");
      setCompanyType("");
      setFirstSeat("");
      setSecondSeat("");
      setCompanyType("");
      setRole("");
    } else {
      popUpDone();
    }
  }

  async function isFirstSadnaFull() {
    const docRef = doc(db, "Lecture", firstSeat);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log(docSnap.data().participantList.length + "participants");
      console.log(docSnap.data().maxParticipant + "max participants");
      return (
        docSnap.data().maxParticipant < docSnap.data().participantList.length
      );
    }
  }

  async function isSecondSadnaFull() {
    const docRef = doc(db, "Lecture", secondSeat);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log(docSnap.data().participantList.length + "participants");
      console.log(docSnap.data().maxParticipant + "max participants");
      return (
        docSnap.data().maxParticipant < docSnap.data().participantList.length
      );
    }
  }

  async function handleParticipants() {
    for (let i = 2; i < 16; i++) {
      console.log("i is " + i);
      let docRef = doc(db, "Lecture", "" + i);
      let docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        for (let j = 0; j < docSnap.data().participantList.length; j++) {
          let documentRef = doc(db, "users", docSnap.data().participantList[j]);
          let documentSnap = await getDoc(documentRef);
          // console.log(docSnap.data().participantList[j]);
          // updateDoc(
            //       documentSnap,
            //       { firstSeat: "" },
            //       { merge: true }
            // );

          if (documentSnap.data()['firstSeat'] !== null) {
            // console.log(docSnap.data().participantList[j]);
            if (docSnap.data()['firstSeatParticipantList'] === undefined) {
              console.log(documentSnap.data()['phone']);
            //     updateDoc(
            //       docRef,
            //       { firstSeatParticipantList: [documentSnap.data()['phone']] },
            //       { merge: true }
            // );
            //   await updateDoc(docRef, {
            //   // firstSeatParticipantList: {[docSnap.data().participantList[j]]},{merge: true}
            // });
            } else {
              // await updateDoc(docRef, 
                // {firstSeatParticipantList: arrayUnion(documentSnap.data()['phone'])} , { merge: true }
              // );
              console.log("else");
            }
            
          }
        }
      }
    }
  }

  async function removeUserFromOthers() {
    const ref = collection(db, "Lecture");
    // if(phone.length === 10 ){
    const snapshot = await ref
      .where("participantList", "array-contains", phone)
      .get();
    if (snapshot.empty) {
      console.log("No matching documents.");
      return;
    }

    snapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });
    // }
  }

  const onChangeCompanyType = (e) => {
    if (e.target.value === "אחר") {
      setCompanyType("");
      setTxtField(true);
    } else {
      setTxtField(false);
      setCompanyType(e.target.value);
    }
  };

  const onChangeFirstSeat = (e) => {
    if (e.target.value === "6" || e.target.value === "3") {
      setFirstOneSeat(true);
      setSecondSeat("1");
    } else {
      setFirstOneSeat(false);
    }
    setFirstSeat(e.target.value);
  };

  const onChangeSecondSeat = (e) => {
    if (e.target.value === "6" || e.target.value === "3") {
      setSecondOneSeat(true);
      setFirstSeat("1");
    } else {
      setSecondOneSeat(false);
    }
    setSecondSeat(e.target.value);
  };
  const popUpDone = () => {
    if (reason === successMessage) {
      const collectionFirstRef = doc(db, "Lecture", firstSeat);
      updateDoc(
        collectionFirstRef,
        { participantList: arrayUnion(phone) },
        { merge: true }
      );
      const collectionSecondRef = doc(db, "Lecture", secondSeat);
      updateDoc(
        collectionSecondRef,
        { participantList: arrayUnion(phone) },
        { merge: true }
      );
    }
    document.getElementById("pop-up-screen").style.display = "block";
  };

  async function checkReason() {
    if (isFirstSadna === false || isSecondSadna === false) {
      if (firstSeat === "" || secondSeat === "" || firstSeat === secondSeat) {
        return "אנא בחר שני מושבים.";
      }
    }

    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      return ".המייל שהזנת אינו תקין";
    } else if (name.length < 2) {
      return ".השם שהזנת אינו תקין";
    } else if (company.length < 2) {
      return ".שם החברה שהזנת אינו תקין ";
    } else if (companyType.length < 2) {
      return " .סוג החברה שהזנת אינו תקין";
    } else if (role.length < 2) {
      return " .התפקיד שהזנת אינו תקין";
    } else if (phone.length !== 10) {
      return " .מספר הטלפון שהזנת אינו תקין";
    }
    const firstFull = await isFirstSadnaFull();
    const secondFull = await isSecondSadnaFull();
    if (firstFull) {
      return "המושב הראשון שבחרת מלא, אנא שנה בחירתך.";
    } else if (secondFull) {
      return "המושב השני שבחרת מלא, אנא שנה בחירתך.";
    } else {
      return successMessage;
    }
  }

  return (
    <div>
      <div className="div-form">
        <div className="form-text">
          ההרשמה מיועדת לאנשים העוסקים בפיתוח הדרכה באזרחות ובצבא, ולמנהלי
          הדרכה.{" "}
        </div>
        <div className="form-text">הכנס הינו ללא עלות.</div>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              שם מלא
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              ת.ז. / מספר אישי (לצורך כניסה לבסיס)
            </label>
            <input
              type="phone"
              className="form-control dir-ltr"
              value={id}
              maxLength="9"
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              דרגה (לאנשי צבא בלבד)
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              value={darga}
              onChange={(e) => setDarga(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              מייל (לצורך שליחת אישור השתתפות)
            </label>
            <input
              type="email"
              className="form-control dir-ltr"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">
              טלפון
            </label>
            <input
              type="tel"
              className="form-control dir-ltr"
              id="exampleInputPassword1"
              maxLength="10"
              pattern="[0][5][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {!isSecondSadna ? (
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                מושב 1
              </label>
              <select
                placeholder="בחר מושב ראשון"
                type="text"
                className="form-control form-select"
                // value={isFirstSadna ? "אחר" :companyType}
                onChange={(e) => onChangeFirstSeat(e)}
                // onChange={(e) => setFirstSeat(e.target.value)}
              >
                <option value="">בחר</option>
                {/* <option value="2">סקילבילדרז</option> */}
                <option value="3">על רשתות חברתיות, צה״ל, ומה שביניהם</option>
                {/* <option value="4">משחקי אסטרטגיית למידה</option> */}
                <option value="5">החיים כמשחק</option>
                <option value="6">טרנדים בעולם ה-EdTech</option>
                <option value="7">יתרונות בחשיבה עיצובית</option>
                {/* { <option value="9">
                  לשלב כלים דיגיטלים בהוראה, כל אחד יכול
                </option> } */}
                {/* <option value="10">מחולל משחקים שאפשר לייצר באונליין</option> */}
                <option value="11">שמעו סיפור - שימוש בסטורילטלינג</option>
                {/* <option value="12">רק לא לומדה</option> */}
                <option value="15">כיתת העתיד: מעבדת הדימיון, בינה מלאכותית - המחר כבר כאן</option>
                <option value="13">הסיפור של אמאזון</option>
                
              </select>
            </div>
          ) : (
            false
          )}
          {isFirstSadna ? (
            <div className="regiser-comment">
              {" "}
              לתשומת לבכם - בחרתם בסדנא שאורכה שעה וחצי ולכן לא תוכלו לבחור מושב
              נוסף. תהנו!
            </div>
          ) : (
            true
          )}
          {!isFirstSadna ? (
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                מושב 2
              </label>
              <select
                placeholder="בחר מושב שני"
                type="text"
                className="form-control form-select"
                // value={isFirstSadna ? "6" || "10" :companyType}
                onChange={(e) => onChangeSecondSeat(e)}
              >
                <option value="">בחר</option>
                {/* <option value="2">סקילבילדרז</option> */}
                <option value="3">על רשתות חברתיות, צה״ל, ומה שביניהם</option>
                <option value="4">משחקי אסטרטגיית למידה</option>
                <option value="5">החיים כמשחק</option>
                <option value="6">טרנדים בעולם ה-EdTech</option>
                {/* <option value="7">יתרונות בחשיבה עיצובית</option> */}
                <option value="9">
                  לשלב כלים דיגיטלים בהוראה, כל אחד יכול
                </option>
                {/* <option value="10">מחולל משחקים שאפשר לייצר באונליין</option> */}
                <option value="11">שמעו סיפור - שימוש בסטורילטלינג</option>
                {/* <option value="12">רק לא לומדה</option> */}
                <option value="15">כיתת העתיד: מעבדת הדימיון, בינה מלאכותית - המחר כבר כאן</option>
                <option value="14">חוזים קדימה</option>
                
              </select>
            </div>
          ) : (
            false
          )}
          {isSecondSadna ? (
            <div className="regiser-comment">
              {" "}
              לתשומת לבכם - בחרתם בסדנא שאורכה שעה וחצי ולכן לא תוכלו לבחור מושב
              נוסף. תהנו!
            </div>
          ) : (
            true
          )}
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              ארגון / יחידה
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              תפקיד בארגון
            </label>
            <input
              type="text"
              className="form-control dir-rtl"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              סוג ארגון
            </label>
            <select
              placeholder="בחר סוג ארגון"
              type="text"
              className="form-control form-select"
              value={showTxtField ? "אחר" : companyType}
              onChange={(e) => onChangeCompanyType(e)}
            >
              <option value="">בחר</option>
              <option value="כוחות הבטחון">כוחות הבטחון</option>
              <option value="תעשייה">תעשייה</option>
              <option value="צה״ל">צה״ל</option>
              <option value="ממשלתי">ממשלתי</option>
              <option value="מוסדות חינוך">מוסדות חינוך</option>
              <option value="מוסדות אקדמיה">מוסדות אקדמייה</option>
              <option value="אחר">אחר</option>
            </select>
            {showTxtField ? (
              <input
                type="text"
                className="form-control extra-input"
                id="exampleInputPassword1"
                value={companyType}
                onChange={(e) => setCompanyType(e.target.value)}
              />
            ) : null}
          </div>
          <div className="regiser-comment">
            * לאנשי צבא קוד הלבוש הינו מדי א׳
          </div>
          <div className="regiser-comment">
            * יש לשים לב להרצאה המיועדת לאוכלוסיית הבכירים.
          </div>
          <div className="regiser-comment">
            * על מנת לשנות את הרישום למושבים יש להירשם מחדש.
          </div>
          <div className="regiser-comment">
            * זמינות המושב תלויה בכמות הנרשמים.
          </div>
          <button type="submit" className="btn btn-primary" onClick={submit}>
            שלח
          </button>
        </form>
        <label htmlFor="exampleInputPassword2" className="form-label">
          בלחיצה על שלח אני מבינ/ה שאני נכנס/ת לרשימת המתנה ואין שום התחייבות
          לרישום לאירוע.
        </label>
      </div>
      <div className="pop-up-screen" id="pop-up-screen">
        <div className="pop-up-white-screen"></div>
        {/* <div className="pop-up-done">ההרשמה נקלטה במערכת, פרטים נוספים ישלחו בהמשך. */}
        <div className="pop-up-done">
          {reason}
          <button
            className="pop-up-button"
            onClick={() =>
              (document.getElementById("pop-up-screen").style.display = "none")
            }
          >
            סיום
          </button>
        </div>
        {/* onClick={() => navigate('/')} */}
      </div>
      {/* <div className="bottom-keeper-form"></div> */}
      <Email></Email>
      <div className="shluglug3"></div>
    </div>
  );
};
export default RegisterFormCard;
