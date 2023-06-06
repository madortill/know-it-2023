import { atcb_action } from 'add-to-calendar-button';
import "./add-to-calendar.styles.css";
const AddToCalendar = () => {
    return (
    <div>
    <form  className='link-buttons' onSubmit={e => {
        e.preventDefault();
        atcb_action({
            name: "הכנס חדשנות בלמידה",
            startDate: "2022-11-22",
            startTime: "08:30",
            endTime: "15:30",
            endDate: "2022-11-22",
            buttonStyle: "3d",
            options: ['Apple', 'Google','Microsoft365', 'Outlook.com', 'Yahoo'],
            timeZone: "Asia/Jerusalem",
            iCalFileName: "Know-It",
        });
        }}>
            
                <a  
                    
                    href={`https://waze.com/ul?ll=31.056198,34.840666&navigate=yes`} 
                    target="_blank" rel="noreferrer"><div className="waze-btn"></div>
                </a>
            
            
            <button className="calendar-btn"/>
    </form>
    </div>
    );
}

export default AddToCalendar;