import { BsFillCartCheckFill } from "react-icons/bs";
import { FaAddressBook, FaClipboardList, } from "react-icons/fa";
import { MdReviews, MdWorkHistory } from "react-icons/md";
import { AiFillHome,AiFillCalendar } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        // dashboard sidebade 
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu div">
                    <li>
                        <NavLink to='/dashboard/userHome' className="text-[18px] font-medium">
                            <AiFillHome className="text-white text-2xl"></AiFillHome>
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/mycart' className="text-[18px] font-medium">
                            <BsFillCartCheckFill className="text-white text-2xl"></BsFillCartCheckFill>
                            My Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/payment' className="text-[18px] font-medium">
                        <MdWorkHistory className="text-white text-2xl"></MdWorkHistory>
                            Payment History
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reservation' className="text-[18px] font-medium">
                            <AiFillCalendar  className="text-white text-2xl"></AiFillCalendar>
                            Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review' className="text-[18px] font-medium">
                            <MdReviews  className="text-white text-2xl"></MdReviews>
                           Add a Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/booking' className="text-[18px] font-medium">
                            <FaClipboardList className="text-white text-2xl"></FaClipboardList>
                            My Booking
                        </NavLink>
                    </li>
                   <div className="divider"></div>
                   <li>
                        <NavLink to='/' className="text-[18px] font-medium">
                            <FaClipboardList className="text-white text-2xl"></FaClipboardList>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad' className="text-[18px] font-medium">
                            <FaAddressBook className="text-white text-2xl"></FaAddressBook>
                            Menu
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