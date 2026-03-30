import { useEffect, useState } from "react";
import Logo from "../../../public/logo.png";
import PrimaryButton from "../button/PrimaryButton";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-300 
            ${scrolled ? "bg-black/70 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-16 md:px-10 py-4 flex justify-between items-center">

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
                    <li><a className="hover:text-purple-400">Skills</a></li>
                    <li><a className="hover:text-purple-400">Projects</a></li>
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
                        <li><a>Skills</a></li>
                        <li><a>Projects</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;