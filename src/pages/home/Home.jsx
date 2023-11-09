import Category from "./category/Category";
import Banner from "./banner/Banner";
import PopularMenu from "./popularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;