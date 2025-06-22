// Portfolio site using React + TailwindCSS + TypeScript
// Basic layout: Home, About, Projects, Experience, Skills, Resume, Contact

import { Mail, Github, Linkedin } from "lucide-react";

const projects = [
  {
    title: "Music Scheduler for Texas Client",
    description:
      "Developed a music player used in gyms, malls, and theatres. Handles automatic song scheduling using Laravel 12 and React TypeScript.",
    tech: ["Laravel", "React", "TypeScript", "MySQL"],
    github: "",
    live: "",
  },
  {
    title: "Custom PHP MVC Framework",
    description:
      "Built a lightweight PHP MVC framework from scratch to understand core framework principles.",
    tech: ["PHP"],
    github: "https://github.com/duraibyes/mvc",
    live: "",
  },
];

export default function Portfolio() {
  return (
    <main className="p-4 max-w-4xl mx-auto space-y-6">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Durairaj S</h1>
        <p className="text-lg text-gray-500">
          Full Stack Developer | Laravel & React Expert | Fast Learner with AI
          Edge
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p>
          I’m a passionate developer working at Knackforge Soft Solutions Pvt
          Ltd since Sep 2023, mainly on Laravel 12 and React TypeScript. I’ve
          also worked with Express.js, and believe in writing clean, scalable,
          AI-assisted code. I’m always eager to learn new languages or stacks
          based on project needs.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((proj, idx) => (
            <div key={idx} className="rounded-2xl shadow p-4">
              <div>
                <h3 className="text-xl font-bold mb-1">{proj.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{proj.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    className="text-sm text-blue-500"
                  >
                    View Source
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Experience</h2>
        <ul className="list-disc ml-5 space-y-2">
          <li>
            <strong>Knackforge Soft Solutions</strong> (Sep 2023 – Present):
            Laravel 12, React TypeScript
          </li>
          <li>Pixel Studios (May 2022 – Aug 2023)</li>
          <li>Casperon Technologies (May 2021 – Apr 2022)</li>
          <li>Mitsify Web LLP (Jun 2019 – Apr 2021)</li>
          <li>Xmedia Solutions (Aug 2017 – May 2019)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <p className="leading-relaxed">
          Laravel, PHP, React, TypeScript, JavaScript, Express.js, CodeIgniter,
          HTML, CSS, Bootstrap, Tailwind, MySQL, Git, MongoDB, REST APIs,
          Payment Gateways, AI Tools for Dev Productivity.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Resume</h2>

        <a href="/DURAIRESUME_UPDATED.pdf" target="_blank">
          Download PDF Resume
        </a>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <div className="flex gap-4 items-center">
          <a href="mailto:duraibytes@gmail.com">
            <Mail className="w-5 h-5" /> duraibytes@gmail.com
          </a>
          <a href="https://github.com/duraibyes" target="_blank">
            <Github className="w-5 h-5" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/duraibytes" target="_blank">
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
