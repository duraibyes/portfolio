import { motion } from "framer-motion";
import PrimaryButton from "./button/PrimaryButton";
import SecondaryButton from "./button/SecondaryButton";

const projects = [
    {
        title: "PoSolutions",
        description:
            "Created a responsive and interactive web application using React and Tailwind CSS, focusing on modern UI design and smooth user interaction.",
        tech: ["React", "TypeScript", "Tailwind CSS"],
        url: "https://posolutions-omega.vercel.app/",
        git_link: "https://github.com/duraibyes/posolutions",
        feature: "Responsive UI"
    },
    {
        title: "CyberVenture",
        description:
            "Created a responsive and interactive web application using React and Tailwind CSS, focusing on modern UI design and smooth user interaction.",
        tech: ["React", "TypeScript", "Tailwind CSS"],
        url: "https://cyberventure-ui.vercel.app/",
        git_link: "https://github.com/duraibyes/cyberventure-ui",
        feature: "Responsive UI"
    },
    {
        title: "Profin Solutions",
        description:
            "Created a responsive and interactive web application using React and MUI, focusing on modern UI design and smooth user interaction.",
        tech: ["React", "TypeScript", "MUI"],
        url: "https://profinsolutionsreact.vercel.app/",
        git_link: "https://github.com/duraibyes/profinsolutionsreact",
        feature: "Responsive UI"
    },
    {
        title: "Ozone Decors",
        description:
            "Designed Responsive ui for interior and exterior design in html and bootstrap",
        tech: ["HTML", "Bootstrap"],
        url: "https://ozdecors.vercel.app/",
        git_link: "",
        feature: "Responsive UI"
    },
    {
        title: "GRT Farms",
        description:
            "Designed Responsive ui for Farm harvest design in html and bootstrap",
        tech: ["HTML", "Bootstrap"],
        url: "https://grtfarm.vercel.app/",
        git_link: "",
        feature: "Responsive UI"
    },
    {
        title: "Pidariamman",
        description:
            "Designed Responsive ui for Pidariamman temple site in html and bootstrap",
        tech: ["HTML", "Bootstrap"],
        url: " https://pidariamman.vercel.app/",
        git_link: "",
        feature: "Responsive UI"
    },
    {
        title: "Shero Sparks",
        description:
            "Designed Responsive ui for Shero sparks in html and bootstrap",
        tech: ["React", "Bootstrap"],
        url: "https://sherosparks.vercel.app/",
        git_link: "",
        feature: "Responsive UI"
    },
    {
        title: "Tiger Automobiles",
        description:
            "Designed a responsive enquiry platform for electric vehicles and rickshaws, enabling users to explore products and submit enquiries with a clean and accessible interface.",
        tech: ["React", "Bootstrap"],
        url: "https://tigerautomobiles.vercel.app/",
        git_link: "",
        feature: "Responsive UI"
    },

];

const Projects = () => {
    return (
        <section id="projects" className="py-20  bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1E40AF] ">
            <div className="container mx-auto px-6 lg:px-16">

                {/* TITLE */}
                <div className="text-center mb-16 text-white">
                    <h2 className="text-4xl font-bold">My Projects</h2>
                    <p className="text-blue-100 mt-2">
                        Crafted with precision & passion
                    </p>
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition duration-500 border border-blue-100 flex flex-col justify-between h-full"
                        >

                            {/* HEADER */}
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                                    🚀
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-[#0F172A]">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        Personal Project
                                    </p>
                                </div>
                            </div>

                            {/* BADGES */}
                            <div className="flex gap-2 mb-4 flex-wrap">
                                <span className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                                    {project.feature}
                                </span>

                            </div>

                            {/* DESCRIPTION BOX */}
                            <div className="bg-blue-50 rounded-2xl p-4 mb-4">

                                <p className="text-sm text-gray-700 mb-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 text-xs bg-white rounded-full shadow-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* FOOTER */}
                            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                                <PrimaryButton label="Live Demo" url={project.url} />
                                <SecondaryButton label="Github Link" url={project.git_link} />
                            </div>

                        </motion.div>
                    ))}

                </div>
                <div className="my-6 flex items-center justify-center">
                    <PrimaryButton label="More Projects" url="https://github.com/duraibyes" />
                </div>
            </div>
        </section>
    );
};

export default Projects;