import { BsFillCartCheckFill } from "react-icons/bs";
import { HiUserGroup  } from "react-icons/hi";
import { GrDocumentStore  } from "react-icons/gr";
import { FaAddressBook, FaClipboardList, FaUtensils, } from "react-icons/fa";
import { MdContactMail, MdList, MdReviews, MdShoppingBag, MdWorkHistory } from "react-icons/md";
import { AiFillHome, AiFillCalendar } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {

    // TODO; get isAdmin value from database 
    const [isAdmin] = useAdmin();
    // const isAdmin = true;

    return (
        // dashboard sidebade 
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu pt-8">
                    {isAdmin ? <>
                        <li>
                            <NavLink to='/dashboard/adminHome' className="text-[18px] font-medium">
                                <AiFillHome className=" text-2xl"></AiFillHome>
                               Admin Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/add-items' className="text-[18px] font-medium">
                                <FaUtensils  className="text-2xl"></FaUtensils>
                                Add Items
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/manage-items' className="text-[18px] font-medium">
                                <MdList className="text-2xl"></MdList>
                                Manage Items
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/manage-booking' className="text-[18px] font-medium">
                                <GrDocumentStore  className="text-2xl"></GrDocumentStore>
                                Manage Booking
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/all-users' className="text-[18px] font-medium">
                                <HiUserGroup className="text-2xl"></HiUserGroup>
                                All Users
                            </NavLink>
                        </li>
                      
                    </>
                        : <>
                            <li>
                                <NavLink to='/dashboard/userHome' className="text-[18px] font-medium">
                                    <AiFillHome className=" text-2xl"></AiFillHome>
                                    User Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/mycart' className="text-[18px] font-medium">
                                    <BsFillCartCheckFill className="text-2xl"></BsFillCartCheckFill>
                                    My Cart
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/payment' className="text-[18px] font-medium">
                                    <MdWorkHistory className="text-2xl"></MdWorkHistory>
                                    Payment History
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/reservation' className="text-[18px] font-medium">
                                    <AiFillCalendar className="text-2xl"></AiFillCalendar>
                                    Reservation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/review' className="text-[18px] font-medium">
                                    <MdReviews className="text-2xl"></MdReviews>
                                    Add a Review
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/booking' className="text-[18px] font-medium">
                                    <FaClipboardList className="text-2xl"></FaClipboardList>
                                    My Booking
                                </NavLink>
                            </li>
                        </>}
                    {/* share navlink */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/' className="text-[18px] font-medium">
                            <FaClipboardList className=" text-2xl"></FaClipboardList>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/menu' className="text-[18px] font-medium">
                            <FaAddressBook className=" text-2xl"></FaAddressBook>
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/shop' className="text-[18px] font-medium">
                            <MdShoppingBag className=" text-2xl"></MdShoppingBag>
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/contact' className="text-[18px] font-medium">
                            <MdContactMail className=" text-2xl"></MdContactMail>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-5">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;