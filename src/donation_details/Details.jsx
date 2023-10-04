import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { stringify } from 'postcss';
const Details = () => {

    const { id } = useParams();
    const detailsData = useLoaderData();
    const cardData = detailsData?.items || {};
    const [donationCard, setDonationCard] = useState([])
    

    useEffect(() => {
        const findDetails = cardData.find(card => card.id == id)
        setDonationCard(findDetails);
    }, [id, detailsData])


    const { image, department, title, color, color1, color2, description, price } = donationCard || {}

    console.log("mitul", donationCard);


    const clikedHandleing = () => {
        const items = JSON.parse(localStorage.getItem("donated")) || [];
        console.log(items);
        if (items.length === 0) {
            console.log("askiuhfiaswufhjvhjvdsaf");
            localStorage.setItem('donated', JSON.stringify([donationCard]))
        }
        else {
            const findItem = items.find(i => i.id == id)
            if (findItem) {
                alert('already added')
                return
            }

            localStorage.setItem('donated', JSON.stringify([...items, donationCard]))
            alert('added successfully')
        }


    }




    return (
        <div>
            <div className="py-20 container mx-auto ">
                <div className="card  bg-base-100 ">
                    <figure className="relative w-full">
                        <img className=" h-[650px]" src={image} alt="Shoes" />

                        <div className="h-15  bg-slate-600/70 absolute bottom-0 w-full px-10 py-3 ">
                            <button onClick={clikedHandleing} style={{ backgroundColor: `${color}` }} className="btn  ">
                                Donate {price}
                            </button>
                        </div>
                    </figure>
                    <div >
                        <h2 className="card-title text-4xl font-bold py-4">{title}</h2>
                        <p className="text-gray-500">{description}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;