import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const Details = () => {
    const [donationCard, setDonationCard] = useState()
    const { id } = useParams();
    
    const detailsData = useLoaderData();
    const cardData=detailsData?.items || {};



    useEffect(() => {
        
        const findDetails = cardData.find(card => card.id == id)
        setDonationCard(findDetails);

    }, [id, detailsData])

    console.log(donationCard?.image);
    
const {image,department,title,color,color1,color2,description,price}=donationCard || {}

console.log(donationCard);

    return (
        <div className="pt-20">
<div className="card  bg-base-100 shadow-xl">
      <figure className="relative w-full">
        <img className="w-full h-[650px]" src={image} alt="Shoes" />

        <div className="h-15  bg-slate-600/70 absolute bottom-0 w-full ">
          <button style={{backgroundColor:`${color}`}} className="btn  ">
            Donate {price} $
          </button>
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-4xl font-bold py-4">{title}</h2>
        <p  className="text-gray-500">{description}</p>
       
      </div>
    </div>
        </div>
    );
};

export default Details;