import { GitBranch, Link, Mail } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log("Form Data:", form);

        alert("Message sent successfully 🚀");
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-[#78829c] to-[#2065d4] text-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* Left Side */}
                <div>
                    <h2 className="text-4xl font-bold mb-4">
                        Let's Work Together 🚀
                    </h2>
                    <p className="text-gray-300 mb-6">
                        Have a project in mind or want to collaborate? Feel free to reach out.
                        I'm always open to discussing new opportunities.
                    </p>

                    <div className="space-y-4">
                        <a
                            href="mailto:yourmail@example.com"
                            className="flex items-center gap-3 hover:text-yellow-400 transition"
                        >
                            <Mail size={20} /> yourmail@example.com
                        </a>

                        <a
                            href="https://github.com/duraibyes"
                            target="_blank"
                            className="flex items-center gap-3 hover:text-yellow-400 transition"
                        >
                            <GitBranch size={20} /> GitHub
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            className="flex items-center gap-3 hover:text-yellow-400 transition"
                        >
                            <Link size={20} /> LinkedIn
                        </a>
                    </div>
                </div>

                {/* Right Side - Form */}
                <form
                    onSubmit={handleSubmit}
                    className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-xl border border-white/20"
                >
                    <h3 className="text-2xl font-semibold mb-6">Send Message</h3>

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full mb-4 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full mb-4 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none"
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full mb-6 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none"
                    />

                    <button
                        type="submit"
                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg transition"
                    >
                        Send Message
                    </button>
                </form>

            </div>
        </section>
    );
};

export default ContactSection;