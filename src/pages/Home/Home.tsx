import Banner from "./Banner/Banner";
import BestSellerBooks from "./BestSellerBooks/BestSellerBooks";
import FavBooks from "./FavBooks/FavBooks";
import PromoBanner from "./PromoBanner/PromoBanner";

const Home = () => {
    return (
        <div className="">
            <Banner/>
            <BestSellerBooks/>
            <FavBooks/>
            <PromoBanner/>
        </div>
    );
};

export default Home;