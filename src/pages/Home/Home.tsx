import Banner from "./Banner/Banner";
import BestSellerBooks from "./BestSellerBooks/BestSellerBooks";
import FavBooks from "./FavBooks/FavBooks";
import OtherBooks from "./OtherBooks/OtherBooks";
import PromoBanner from "./PromoBanner/PromoBanner";
import Review from "./rewiew/Review";

const Home = () => {
    return (
        <div className="">
            <Banner/>
            <BestSellerBooks/>
            <FavBooks/>
            <PromoBanner/>
            <OtherBooks/>
            <Review/>
        </div>
    );
};

export default Home;