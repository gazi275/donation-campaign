import { useLoaderData } from "react-router-dom";
import Cards from "../Compoonents/card/Cards";


const Home = () => {
    const cards=useLoaderData();
    

    return (
        <div>
            
           <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;