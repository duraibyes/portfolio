import { motion } from "framer-motion";


const projects = [
    {
        title: "Dynamic Rate Card Management",
        description:
            "Built a full-stack application using Laravel and React for managing product pricing, cart system, and PDF generation.",
        tech: ["Laravel", "React", "TypeScript", "MySQL"],
        github: "#",
        live: "#",
    },
    {
        title: "Music Schedule System",
        description:
            "Developed a scheduling system handling seasonal and event-based playlists with AWS SQS integration.",
        tech: ["Node.js", "TypeScript", "AWS", "SQS"],
        github: "#",
        live: "#",
    },
    {
        title: "Portfolio Website",
        description:
            "Designed and developed a responsive portfolio using React, Tailwind, and animations with Framer Motion.",
        tech: ["React", "Tailwind", "Framer Motion"],
        github: "#",
        live: "#",
    },
];

const Projects = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">

                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
                        My Projects
                    </h2>
                    <p className="text-[#475569] mt-2">
                        Some of my recent work
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
                        >

                            {/* Project Image */}
                            <div className="relative h-[220px] overflow-hidden">
                                <img
                                    src="/project1.png"
                                    alt=""
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                                {/* Buttons on Hover */}
                                <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition duration-500">
                                    <a
                                        href={project.live}
                                        className="bg-[#FACC15] text-[#1E293B] px-4 py-2 text-sm rounded-md font-semibold"
                                    >
                                        Live
                                    </a>
                                    <a
                                        href={project.github}
                                        className="bg-white text-[#1E293B] px-4 py-2 text-sm rounded-md font-semibold"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 bg-white">

                                {/* Title */}
                                <h3 className="text-lg font-semibold text-[#0F172A] group-hover:text-blue-600 transition">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[#475569] mt-2 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Projects