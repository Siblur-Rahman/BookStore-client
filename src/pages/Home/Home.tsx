import Banner from "./Banner/Banner";
import BestSellerBooks from "./BestSellerBooks/BestSellerBooks";
import FavBooks from "./FavBooks/FavBooks";

const Home = () => {
    return (
        <div className="">
            <Banner/>
            <BestSellerBooks/>
            <FavBooks/>
        </div>
    );
};

export default Home;