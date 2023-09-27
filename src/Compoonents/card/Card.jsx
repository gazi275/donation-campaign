import { Link } from "react-router-dom";


const Card = ({card}) => {
    const {image,department,title,color,color1,color2,id}=card
    console.log(image);
    return (
      <Link to={`/donationDetails/${id}`}>
        <div className="flex py-4">
            <div className="card bg-base-100 shadow-xl">
  <figure><img className="w-full" src={image} alt="" /></figure>
  <div style={{backgroundColor:`${color1}`}} className="card-body ">
  <div className="card-actions ">
      <button style={{backgroundColor:`${color2}`,color:`${color}`} } className="py-1 px-3 rounded text-xl " >{department}</button>
    </div>
    <h2 style={{color:`${color}`}} className="card-title">{title}</h2>
   
    
  </div>
</div>
        </div>
        </Link>
    );
};

export default Card;