import Banner from "./Banner/Banner";
import FavoriteBooks from "./FavoriteBooks/FavoriteBooks";

const Home = () => {
    return (
        <div className="h-screen">
            <Banner/>
            <FavoriteBooks/>
            {/* <FavoriteBooks/>
            <div className="h-screen"></div> */}
        </div>
    );
};

export default Home;