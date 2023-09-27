

const Banner = () => {
    return (
        <div>
            <div>
      <div className="bg-[url(https://i.ibb.co/XSqyWbq/donation.jpg)] bg-no-repeat h-[450px] w-full  bg-cover my-16">
        <div className=" w-full h-full bg-white/80 flex justify-center items-center">
          <div>
            <p className="text-4xl font-bold mb-4">
              I GROW BY HELPING PEOPLE IN NEED
            </p>
            <div className="flex justify-center gap-2">
              <input type="text" className="w-[312px] rounded" />
              <button
                className="middle none center rounded-lg bg-[#FF444A] py-3 px-6  text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Banner;