import { Link } from "react-router-dom";
import SectionDescriptionHeading from "../../shared/SectionDescriptionHeading";
import BtnUnderDescription from "../../shared/BtnUnderDescription";
import boookPic from "../../../assets/awardbooks.png"

const PromoBanner = () => {
    return (
        <div className="mt-16 py-12 bg-teal-100 px-4 lg:px-24">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="md:w-1/2">
                    <SectionDescriptionHeading text_1="2023 National Book Awards for Fiction Shortlist"/>
                    
                    <Link to="/shop" className="mt-12 block">
                            <BtnUnderDescription text="Get Promo Code"/>
                    </Link>
                </div>
                <div>
                    <img src={boookPic} alt="" />
                </div>
            </div>
        </div>
    );
};

export default PromoBanner;