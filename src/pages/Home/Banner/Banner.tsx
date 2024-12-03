import BannerCard from "./BannerCard";

const Banner = () => {
    return (
        <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12 py-40">
                {/* left sidebar */}
                <div className="md:w-1/2 space-y-8 h-full">
                <h2 className="text-5xl font-bold leading-snug ">Buy and Sell Your Book <span className="text-blue-700">For The Best Prices</span> </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe est numquam aliquam accusamus vitae labore eum recusandae tempora? Eligendi, veritatis provident. Assumenda ducimus, explicabo veritatis distinctio aperiam est vero libero!</p>
                <div>
                    <input type="text" className="p-2 rounded-sm outline-none" placeholder="Search" />
                    <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">Search</button>
                </div>
                </div>
            </div>
            {/* right sidebar */}
            <div className="">
                <BannerCard/>
            </div>
        </div>
    );
};

export default Banner;