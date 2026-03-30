import { motion } from "framer-motion";


const skills = [
    { name: "Laravel / PHP", level: 95 },        // 🔥 Core strength
    { name: "React / TypeScript", level: 85 },   // Strong
    { name: "JavaScript", level: 85 },           // Strong base
    { name: "REST API Development", level: 88 }, // Important (you missed this!)
    { name: "MySQL / Database Design", level: 80 },
    { name: "HTML / CSS", level: 75 },           // Reduced (realistic)
    { name: "Tailwind / Bootstrap", level: 75 }, // Combined (cleaner)
    { name: "Git / Version Control", level: 80 },
    { name: "AWS / Cloud", level: 65 },
    { name: "Jquery", level: 60 },         // Increased (you’re learning actively)
    { name: "Angular", level: 50 },              // Not too low
    { name: "Flutter", level: 40 },
    // Beginner but not too low
];

const Skills = () => {
    return (
        <section className="py-16 bg-[#EFF6FF]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-16">

                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">
                        My Skills
                    </h2>
                    <p className="text-[#475569] mt-2">
                        Technologies I work with
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-8">

                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >

                            {/* Skill Header */}
                            <div className="flex justify-between mb-2">
                                <span className="text-[#1E293B] font-medium">
                                    {skill.name}
                                </span>
                                <span className="text-blue-600 font-semibold">
                                    {skill.level}%
                                </span>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full h-3 bg-blue-100 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                    className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"
                                />
                            </div>

                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Skills