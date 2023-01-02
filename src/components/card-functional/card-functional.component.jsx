import "./card-functional.style.css";

const Card = (props) => {
    const {id, name, email} = props.monster;
    return (
        <div className="card-container" key={id}>
            <img alt={`monster ${id}`}
                 src={`https://robohash.org/${id}?set=set4&size=180x180`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
};

export default Card;