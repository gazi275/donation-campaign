

const Card = ({card}) => {
    const {image,id,department,title,color,color1,color2}=card
    console.log(image);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="w-full" src={image} alt="Shoes" /></figure>
  <div style={{backgroundColor:`${color1}`}} className="card-body ">
  <div className="card-actions ">
      <button style={{backgroundColor:`${color2}`} } className="py-1 px-3 rounded " >{department}</button>
    </div>
    <h2 style={{Color:`${color}`}} className="card-title">{title}</h2>
   
    
  </div>
</div>
        </div>
    );
};

export default Card;