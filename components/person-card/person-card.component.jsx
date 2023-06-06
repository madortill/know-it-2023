import "./person-card.styles.css"
const PersonCard = (props) => {
    return (
        <div className="person-card">
            <img src={props.avatar} alt="avatar" className="avatar"/>
            <h1 className="name">{props.name}</h1>
            <div className="avatar-description">{props.description}</div>
        </div>
    )
}
export default PersonCard;