import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
        <NavLink to='/' className={({ isActive }) => isActive ? 'btn bg-transparent border-0 hover:bg-transparent text-[18px] text-[#EEFF25] font-bold' :
            'btn bg-transparent border-0 hover:bg-transparent text-[18px] text-white font-bold'}>
            Home
        </NavLink>
        <NavLink to='/contact-us' className={({ isActive }) => isActive ? 'btn bg-transparent border-0 hover:bg-transparent text-[18px] text-[#EEFF25] font-bold' :
            'btn bg-transparent border-0 hover:bg-transparent text-[18px] text-white font-bold'}>
            CONTACT US
        </NavLink>
        <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'btn bg-transparent border-0 hover:bg-transparent text-[18px] text-[#EEFF25] font-bold' :
            'btn bg-transparent border-0 hover:bg-transparent text-[18px] text-white font-bold'}>
            DASHBOARD
        </NavLink>
        <NavLink to='/our-menu' className={({ isActive }) => isActive ? 'btn bg-transparent border-0 hover:bg-transparent text-[18px] text-[#EEFF25] font-bold' :
            'btn bg-transparent border-0 hover:bg-transparent text-[18px] text-white font-bold'}>
            Our Menu
        </NavLink>
        <NavLink to='/our-shop' className={({ isActive }) => isActive ? 'btn bg-transparent border-0 hover:bg-transparent text-[18px] text-[#EEFF25] font-bold' :
            'btn bg-transparent border-0 hover:bg-transparent text-[18px] text-white font-bold'}>
            Our Shop
        </NavLink>
        <NavLink to='/order' className={({ isActive }) => isActive ? 'btn bg-transparent border-0 hover:bg-transparent text-[18px] text-[#EEFF25] font-bold' :
            'btn bg-transparent border-0 hover:bg-transparent text-[18px] text-white font-bold'}>
           Order Food
        </NavLink>
        <NavLink to='/sign-out' className={({ isActive }) => isActive ? 'btn bg-transparent border-0 hover:bg-transparent text-[18px] text-[#EEFF25] font-bold' :
            'btn bg-transparent border-0 hover:bg-transparent text-[18px] text-white font-bold'}>
           SIGN OUT
        </NavLink>
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
                    <h1 className="text-white text-5xl font-bold">Bistro Boss <br /><p className="text-2xl text-ellipsis">Resturent</p></h1>
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