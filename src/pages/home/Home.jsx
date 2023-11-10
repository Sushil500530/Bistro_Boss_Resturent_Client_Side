import Category from "./category/Category";
import Banner from "./banner/Banner";
import PopularMenu from "./popularMenu/PopularMenu";
import Featured from "./featured/Featured";
import TestyMonials from "./testyMonials/TestyMonials";
import CallUs from "./CallUs";
import Recuirments from "./cheef recuments/Recuirments";
import BestroBoss from "./bistro-boss/BistroBoss";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BestroBoss></BestroBoss>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Recuirments></Recuirments>
            <Featured></Featured>
            <TestyMonials></TestyMonials>
        </div>
    );
};

export default Home;