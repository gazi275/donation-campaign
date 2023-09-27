import { useLoaderData } from "react-router-dom";
import Cards from "../Compoonents/card/Cards";
import Banner from "../banner/Banner";


const Home = () => {
    const cards=useLoaderData();
    

    return (
        <div>
            <Banner></Banner>
           <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;