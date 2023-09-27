import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div >
            <nav className="flex justify-between items-center">
                <img src="https://i.ibb.co/gW1tyDr/Logo.png" alt="" /> 
                <ul className="flex gap-8">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                           Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                         Donation
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                        Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
            
        </div>
    );
};

export default Navbar;