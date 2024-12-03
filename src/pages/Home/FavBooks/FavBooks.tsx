
import { Link } from "react-router-dom";
import favBooksImage from "../../../assets/favoritebook.jpg"
import SectionDescription from "../../shared/SectionDescription";
import BtnUnderDescription from "../../shared/BtnUnderDescription";

const FavBooks = () => {
    return (
        <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="md:w-1/2">
                <img src={favBooksImage} alt="" className="rounded md:w-10/12" />
            </div>
            <div className="md:w-1/2 space-y-5">
                <h2 className="text-5xl font-bold leading-snug my-5">Find Your Favorite <span className="text-blue-700">Book Here!</span></h2>
                <SectionDescription text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia laborum quis sed repellendus quisquam eos corrupti doloremque minima delectus tempora suscipit autem repudiandae quae quibusdam, vero harum laudantium ut earum."/>
                {/* stats */}
                <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
                    <div>
                        <h3 className="text3xl font-bold">800+</h3>
                        <h3 className="text-base">Book Listing</h3>
                    </div>
                    <div>
                        <h3 className="text3xl font-bold text-base">550+</h3>
                        <h3 className="text-base">Register Users</h3>
                    </div>
                    <div>
                        <h3 className="text3xl font-bold text-base">1200+</h3>
                        <h3 className="text-base">PDF DownLoaded</h3>
                    </div>
                    {/* <div>
                        <h3 className="text3xl font-bold text-base">+</h3>
                        <h3 className="text-base"></h3>
                    </div> */}
                </div>

                <Link to="/shop" className="mt-12 block">
                        <BtnUnderDescription text="Eplore More"/>
                </Link>
            </div>
        </div>
    );
};

export default FavBooks;