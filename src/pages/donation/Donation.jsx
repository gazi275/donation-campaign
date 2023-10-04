

const Donation = () => {
    const items = JSON.parse(localStorage.getItem("donated")) || [];

    return (
        <div>
            {
                items.map(item=>{
                
            
                         <div className="  bg-base-100 shadow-xl">
  <figure><img src={item.image} alt="Movie"/></figure>
  <div className="">
    <h2 className=""></h2>
     <p>Click the button to watch on Jetflix app.</p>
     <div className=" justify-end">
       <button className="btn btn-primary">Watch</button>
     </div>
   </div>
 </div>
                })


            }
            </div>
 
                         
 
           
    );
};

export default Donation;