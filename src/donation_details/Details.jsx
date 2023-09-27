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

    
    
const {image,department,title,color,color1,color2,description,price}=donationCard || {}
     const clikedHandleing = () => {
    const donateditems = [];

    const items = JSON.parse(localStorage.getItem("donated"));

    if (!items) {
      donateditems.push(card);
      localStorage.setItem("donated", JSON.stringify(donateditems));
      alert("product added");
    } else {
      const isexist = items.find((item) => item.id === id);

      if (isexist) {
        donateditems.push(...items, card);
        localStorage.setItem("donated", JSON.stringify(donateditems));
        alert("product added");
      } else {
        alert("already addeded");
      }
    }
};


    return (
        <div>
        <div className="py-20 container mx-auto ">
<div className="card  bg-base-100 ">
      <figure className="relative w-full">
        <img className=" h-[650px]" src={image} alt="Shoes" />

        <div className="h-15  bg-slate-600/70 absolute bottom-0 w-full px-10 py-3 ">
          <button onClick={()=>clikedHandleing()} style={{backgroundColor:`${color}`}} className="btn  ">
            Donate {price} 
          </button>
        </div>
      </figure>
      <div >
        <h2 className="card-title text-4xl font-bold py-4">{title}</h2>
        <p  className="text-gray-500">{description}</p>
       
      </div>
    </div>
        </div>
        </div>
    );
};

export default Details;