import SectionTitle from "../category/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../menu/manu-Category/MenuCategory";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    // const [menuData, setMenuData] = useState([])
    // useEffect(() => {
    //     fetch('/menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular')
    //             setMenuData(popularItems)
    //         })
    // }, [])
    // console.log(menuData);
    return (
        <section>
            <SectionTitle
                heading={'From Our Menu'}
                subHeading={'Popular Menu'}
            ></SectionTitle>
            <MenuCategory items={popular} ></MenuCategory>
            <div className="w-full flex items-center justify-center mb-12">
                <button className=" btn btn-outline  hover:text-yellow-300 border-0 border-b-4 border-black">View Full  Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;