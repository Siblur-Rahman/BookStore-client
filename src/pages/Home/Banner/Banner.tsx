import SectionDescriptionHeading from "../../shared/SectionDescriptionHeading";
import SectionDescription from "../../shared/SectionDescription";
import BannerCard from "./BannerCard";

const Banner = () => {
    return (
        <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12 py-40">
                {/* left sidebar */}
                <div className="md:w-1/2 space-y-8 h-full">
                {/* <h2 className="text-5xl font-bold leading-snug ">Buy and Sell Your Book <span className="text-blue-700">For The Best Prices</span> </h2> */}
                <SectionDescriptionHeading text_1="Buy and Sell Your Book" text_2="For The Best Prices"/>
                <SectionDescription text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia laborum quis sed repellendus quisquam eos corrupti doloremque minima delectus tempora suscipit autem repudiandae quae quibusdam, vero harum laudantium ut earum."/>
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