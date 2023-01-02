import Card from "../card-functional/card-functional.component";
import "./card-list-functional.style.css";

const CardList = ({monsters}) => {
    return (
        <div className="card-list">
            {
                monsters.map(monster => {
                    return <Card monster={monster} key={monster.id} />;
                })
            }
        </div>
    );
}

export default CardList;