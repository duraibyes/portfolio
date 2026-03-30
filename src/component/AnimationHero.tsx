import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import ProfileImg from "../../public/profile.png";
import PrimaryButton from "./button/PrimaryButton";
import OutlineWhiteButton from "./button/OutlineWhiteButton";

export default function AnimationHero() {
    return (
        <section className="bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1E40AF] min-h-screen flex items-center">
            {/* <section className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400  min-h-screen flex items-center"> */}


            <div className="container mx-auto px-4 sm:px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 text-center md:text-left"
                >
                    <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight">
                        <span className="block text-[#FACC15] drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">
                            Hello,
                        </span>
                        I am Durairaj.S
                    </h2>

                    {/* Typing Animation */}
                    <h5 className="text-blue-100 font-medium text-xl md:text-2xl mt-4">
                        <TypeAnimation
                            sequence={[
                                "Full Stack Developer",
                                2000,
                                "Laravel & PHP Developer",
                                2000,
                                "React & Typescript Developer",
                                2000,
                                "API Specialist",
                                2000,
                                "MySQL & Database Designer",
                                2000,
                                "AWS & Azure Cloud Learner",
                                2000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                            wrapper="span"
                            cursor={false}
                        />
                        <span className="ml-1 animate-pulse">|</span>
                    </h5>

                    {/* Description */}
                    <p className="text-blue-200 my-6 text-lg leading-relaxed max-w-xl">
                        I design and develop scalable web applications using Laravel, React, and TypeScript.
                        I focus on clean architecture, performance, and delivering real-world solutions.
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4 justify-center md:justify-start">
                        <PrimaryButton label="Hire me" />

                        <OutlineWhiteButton label="View Projects" url="https://github.com/duraibyes" />
                    </div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0"
                >
                    <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px]">

                        <img
                            className="rounded-full w-full h-full object-cover border-4 border-white/20 shadow-xl"
                            src={ProfileImg}
                            alt=""
                        />

                        {/* Floating Icons */}
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            className="absolute top-0 left-1/2 -translate-x-1/2 
                            w-[40px] h-[40px] 
                            sm:w-[50px] sm:h-[50px] 
                            md:w-[60px] md:h-[60px]  
                            bg-white p-3 rounded-xl shadow-md"
                        >
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" className="w-full h-full " />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            className="absolute top-[10%] left-0 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] 
                            md:w-[60px] md:h-[60px]  bg-white p-3 rounded-xl shadow-md"
                        >
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" className="w-full h-full " />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            className="absolute top-[10%] right-0  w-[40px] h-[40px]  sm:w-[50px] sm:h-[50px] 
                            md:w-[60px] md:h-[60px]   bg-white p-3 rounded-xl shadow-md"
                        >
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-full h-full " />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            className="absolute bottom-[10%] right-[10%]  w-[40px] h-[40px]  md:w-[60px] md:h-[60px] bg-white p-3 rounded-xl shadow-md"
                        >
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="w-full h-full " />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            className="absolute bottom-[5%] left-[5%] w-[40px] h-[40px] 
                            sm:w-[50px] sm:h-[50px] 
                            md:w-[60px] md:h-[60px] bg-white p-3 rounded-xl shadow-md"
                        >
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" className="w-full h-full " />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            className="absolute bottom-[40%] left-[-10%] w-[40px] h-[40px] 
                            sm:w-[50px] sm:h-[50px] 
                            md:w-[60px] md:h-[60px] bg-white p-3 rounded-xl shadow-md"
                        >
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="w-full h-full " />
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}