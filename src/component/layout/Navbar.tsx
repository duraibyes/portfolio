import { useState } from "react";
import Logo from "../../../public/logo.png";
import PrimaryButton from "../button/PrimaryButton";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-14 md:px-10 py-4 flex justify-between items-center">

                {/* LOGO */}
                <div className="text-2xl font-bold flex items-center gap-2">
                    <div className="w-8 h-8 bg-white p-1 rounded-full flex items-center justify-center">
                        <img src={Logo} className="w-full h-full object-contain" />
                    </div>
                    S.Durairaj
                </div>

                {/* DESKTOP MENU */}
                <ul className="hidden md:flex gap-6">
                    <li><a className="hover:text-purple-400">Home</a></li>
                    <li><a className="hover:text-purple-400">About</a></li>
                    <li><a className="hover:text-purple-400">Service</a></li>
                    <li><a className="hover:text-purple-400">Portfolio</a></li>
                    <li><a className="hover:text-purple-400">Contact</a></li>
                </ul>

                {/* BUTTON */}
                <div className="hidden md:block">
                    <PrimaryButton label="Resume" />
                </div>

                {/* MOBILE BUTTON */}
                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden bg-slate-800 px-4 pb-4">
                    <ul className="flex flex-col gap-4">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Service</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;