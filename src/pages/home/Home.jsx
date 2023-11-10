import Category from "./category/Category";
import Banner from "./banner/Banner";
import PopularMenu from "./popularMenu/PopularMenu";
import Featured from "./featured/Featured";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;