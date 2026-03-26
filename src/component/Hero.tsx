import ProfileImg from "../../public/profile.png";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import PrimaryButton from "./button/PrimaryButton";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    return (
        <section className="static-hero bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1E40AF] relative z-40 md:py-16 py-16 lg:py-16 sm:py-4 flex">

            <div className="container gap-6 mx-auto px-4 sm:px-6 lg:px-14 md:px-10 md:py-16 py-12 sm:py-8 lg:py-16 flex flex-col md:flex-row items-center justify-between">

                {/* LEFT SIDE (TEXT) */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight">
                        <span className="block text-[#FACC15] drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]s">Hello,</span>
                        I am Durairaj.S
                    </h2>


                    <h5 className="text-[#FACC15] font-medium text-xl md:text-2xl mt-2">
                        <TypeAnimation
                            sequence={[
                                "Full Stack Developer",
                                2000,
                                "Laravel Developer",
                                2000,
                                "React Developer",
                                2000,
                                "API Specialist",
                                2000,
                                "Php Developer",
                                2000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                        />
                    </h5>

                    <p className="text-[#334155] my-4 text-lg leading-relaxed">
                        Full Stack Developer with experience in building scalable web applications using Laravel, React, and TypeScript.
                        I specialize in creating efficient APIs, responsive UI, and delivering high-quality solutions for real-world business needs.
                    </p>
                    <p className="text-blue-300 text-sm mt-2">
                        Laravel • React • TypeScript • MySQL • AWS
                    </p>

                    <PrimaryButton label="Hire Me" />
                </div>

                {/* RIGHT SIDE (IMAGE) */}
                <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">

                    {/* Main Image */}
                    <div className="relative w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px]">
                        <img
                            className="rounded-full w-full h-full object-cover"
                            src={ProfileImg}
                            alt=""
                        />

                        {/* Laravel */}
                        <div className="absolute top-[10%] left-0 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] bg-white p-3 rounded-xl floating-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" />
                        </div>

                        {/* React */}
                        <div className="absolute top-[10%] right-0 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] bg-white p-3 rounded-xl floating-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        </div>

                        {/* Git */}
                        <div className="absolute bottom-[10%] right-[10%] w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] bg-white p-3 rounded-xl floating-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                        </div>

                        {/* Projects Count */}
                        <div className="absolute bottom-0 left-0 bg-white px-4 py-2 rounded-2xl flex items-center shadow-md floating-item">
                            <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                            <div>
                                <h3 className="text-lg font-semibold text-[#202020]">100+</h3>
                                <p className="text-xs text-[#585858]">Complete Project</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="absolute top-0 left-0 -z-10">
                <svg
                    className=" fill-[#FF4155]"
                    width="1038"
                    height="938"
                    viewBox="0 0 1038 938"
                    fill="none">
                    <g opacity="0.5" filter="url(#filter0_f_39_4392)">
                        <circle cx="290.5" cy="282.5" r="247.5"></circle>
                    </g>
                    <defs>
                        <filter
                            id="filter0_f_39_4392"
                            x="-457"
                            y="-465"
                            width="1495"
                            height="1495"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"></feBlend>
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4392"></feGaussianBlur>
                        </filter>
                    </defs>
                </svg>
            </div>
            <div
                className="absolute top-[50%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 -z-10">
                <svg
                    className="fill-[#FFE600]"
                    width="1295"
                    height="938"
                    viewBox="0 0 1295 938"
                    fill="none">
                    <g opacity="0.4" filter="url(#filter0_f_39_4393)">
                        <circle cx="647.5" cy="561.5" r="247.5"></circle>
                    </g>
                    <defs>
                        <filter
                            id="filter0_f_39_4393"
                            x="0"
                            y="-86"
                            width="1295"
                            height="1295"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"></feBlend>
                            <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_39_4393"></feGaussianBlur>
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="absolute top-0 right-0 -z-10">
                <svg
                    className="fill-[#48C5EA]"
                    width="752"
                    height="747"
                    viewBox="0 0 752 747"
                    fill="none">
                    <g opacity="0.45" filter="url(#filter0_f_39_4394)">
                        <circle cx="647.5" cy="99.5" r="247.5"></circle>
                    </g>
                    <defs>
                        <filter
                            id="filter0_f_39_4394"
                            x="0"
                            y="-548"
                            width="1295"
                            height="1295"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"></feBlend>
                            <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_39_4394"></feGaussianBlur>
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="absolute left-0 bottom-0 -z-10">
                <img src="/static/media/line-1.d03426237aa137b47141.png" alt="" /></div>
            <div className="absolute right-0 top-0 -z-10">
                <img src="/static/media/line-2.326f98abce9f428d7f46.png" alt="" /></div>
        </section>
    )
}

export default Hero