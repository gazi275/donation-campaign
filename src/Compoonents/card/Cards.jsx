import Card from "./Card";


const Cards = ({cards}) => {
    
    return (
        <div>
         {
                cards.items?.map(card=> <Card key={card.id} card={card}></Card>)
            } 
        </div>
    );
};

export default Cards;