import Card from "./Card";


const Cards = ({cards}) => {
    
    return (
        <div className="grid grid-cols-1  gap-4 md:grid-cols-2 lg:grid-cols-4">
         {
                cards.items?.map(card=> <Card key={card.id} card={card}></Card>)
            } 
        </div>
    );
};

export default Cards;