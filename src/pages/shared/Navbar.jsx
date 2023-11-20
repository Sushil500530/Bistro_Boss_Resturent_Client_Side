import { useContext } from "react";
import { NavLink, } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { BsFillCartCheckFill } from 'react-icons/bs';
import profile from '../../assets/others/profile.png'
import Swal from "sweetalert2";
import useCarts from "../../hooks/useCarts";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
    const [carts] = useCarts();
    const [isAdmin] = useAdmin();

    const { user, logoutUser } = useContext(AuthContext);

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                Swal.fire({
                    title: "User Resister Successfully!",
                    showClass: {
                        popup: `
                animate__animated
                animate__fadeInUp
                animate__faster`
                    },
                    hideClass: {
                        popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster`}
                });
            })
            .catch(err => console.log(err))
    }

    const navLinks = <>
        <NavLink to='/' className={({ isActive }) => isActive ? 'btn bg-transparent border-0 hover:bg-transparent text-[18px] text-[#EEFF25] font-bold' :
            'btn bg-transparent border-0 hover:bg-transparent text-[18px] text-white font-bold'}>
            Home
        </NavLink>

        <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'btn bg-transparent border-0 hover:bg-transparent text-[18px] text-[#EEFF25] font-bold' :
            'btn bg-transparent border-0 hover:bg-transparent text-[18px] text-white font-bold'}>
            DASHBOARD
        </NavLink>
        <NavLink to='/our-menu' className={({ isActive }) => isActive ? 'btn bg-transparent border-0 hover:bg-transparent text-[18px] text-[#EEFF25] font-bold' :
            'btn bg-transparent border-0 hover:bg-transparent text-[18px] text-white font-bold'}>
            Our Menu
        </NavLink>
        {
            // user ? 'true' : 'false'    
            //  user ? condition ? 'double true' : 'one true' : 'false'
        }
        {
            user && isAdmin && <NavLink to='/dashboard/admin-home' className={({ isActive }) => isActive ? 'btn bg-transparent border-0 hover:bg-transparent text-[18px] text-[#EEFF25] font-bold' :
                'btn bg-transparent border-0 hover:bg-transparent text-[18px] text-white font-bold'}>
                Secret
            </NavLink>
        }
        {
            user && !isAdmin && <NavLink to='/dashboard/user-home' className={({ isActive }) => isActive ? 'btn bg-transparent border-0 hover:bg-transparent text-[18px] text-[#EEFF25] font-bold' :
                'btn bg-transparent border-0 hover:bg-transparent text-[18px] text-white font-bold'}>
                Secret
            </NavLink>
        }
        <NavLink to='/dashboard/mycart' className={({ isActive }) => isActive ? 'btn bg-transparent border-0 hover:bg-transparent text-[18px] text-[#EEFF25] font-bold' :
            'btn bg-transparent border-0 hover:bg-transparent text-[18px] text-white font-bold'}>
            <button className="btn bg-transparent border-none hover:bg-transparent font-bold text-3xl text-white">
                <BsFillCartCheckFill></BsFillCartCheckFill>
                <div className="badge badge-secondary -mt-12 font-medium -ml-8 text-[18px]">+{`${carts?.length}`}</div>
            </button>
        </NavLink>
        <NavLink to='/order/salad' className={({ isActive }) => isActive ? 'btn bg-transparent border-0 hover:bg-transparent text-[18px] text-[#EEFF25] font-bold' :
            'btn bg-transparent border-0 hover:bg-transparent text-[18px] text-white font-bold'}>
            Order Food
        </NavLink>
        {
            user ? <><div className="avatar">
                <div className="w-12 mr-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    {user?.photoURL ? <img src={user?.photoURL} alt="photo" /> : <img src={profile} alt="photo" />}
                </div>
            </div> <button onClick={handleLogout} className="btn bg-red-500 text-white text-[18px] hover:text-black ">Logout</button>
            </> : <NavLink to='/login' className={({ isActive }) => isActive ? 'btn bg-transparent border-0 hover:bg-transparent text-[18px] text-[#EEFF25] font-bold' :
                'btn bg-transparent border-0 hover:bg-transparent text-[18px] text-white font-bold'}>
                Login
            </NavLink>
        }
    </>
    return (
        <div className="navbar fixed z-10 bg-[#15151580] flex justify-between items-center container mx-auto">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold">Bistro Boss <br /><p className="text-xl text-ellipsis">Resturent</p></h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;