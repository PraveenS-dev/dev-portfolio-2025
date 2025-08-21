// src/components/Contact.jsx
import { useRef } from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export default function Contact() {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    Swal.fire({
                        icon: "success",
                        title: "Message Sent!",
                        text: "Thank you for reaching out. I will get back to you soon.",
                        timer: 3000,
                        showConfirmButton: false,
                    });
                    formRef.current.reset();
                },
                (error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong! Please try again later.",
                        timer: 3000,
                        showConfirmButton: false,
                    });
                }
            );
    };


    return (
        <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
            <div className="max-w-4xl mx-auto text-center">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
                >
                    Get in Touch
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-700 dark:text-gray-300 mb-12 transition-colors duration-500"
                >
                    Have a project or just want to say hi? My inbox is open for all opportunities.
                </motion.p>

                {/* Contact Form */}
                <motion.form
                    ref={formRef}
                    onSubmit={sendEmail}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid gap-6 bg-gray-200 dark:bg-gray-800 p-8 rounded-2xl shadow-lg transition-colors duration-500"
                >
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        required
                        className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors duration-300"
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        required
                        className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors duration-300"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        required
                        className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors duration-300"
                    />
                    <button
                        type="submit"
                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-colors duration-300"
                    >
                        Send Message
                    </button>
                </motion.form>
            </div>
        </section>
    );

}
