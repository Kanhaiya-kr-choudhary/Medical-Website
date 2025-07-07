import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "./Footer";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="bg-gray-100">
            {/* Hero Section */}
            <div
                className="relative w-full h-80 bg-cover bg-center flex items-center justify-center text-black text-center"
                style={{
                    backgroundImage:
                        "url('https://www.chitkara.edu.in/blogs/wp-content/uploads/2024/05/MBA-in-Healthcare-Job.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10">
                    <h1 className="text-5xl font-bold">Contact Us</h1>
                    <p className="text-lg mt-2">We’re here to assist you with any queries</p>
                </div>
            </div>

            {/* Contact Details Section */}
            <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <FaPhone className="text-purple-400 text-4xl mx-auto mb-4" />
                    <h3 className="text-xl font-bold">Call Us</h3>
                    <p className="text-gray-600">Available 24/7</p>
                    <p className="text-lg font-bold text-black mt-2">+91 98765 43210</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <FaEnvelope className="text-purple-400 text-4xl mx-auto mb-4" />
                    <h3 className="text-xl font-bold">Email Us</h3>
                    <p className="text-gray-600">We reply within 24 hours</p>
                    <p className="text-lg font-bold text-black mt-2">support@mediease.com</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <FaMapMarkerAlt className="text-purple-400 text-4xl mx-auto mb-4" />
                    <h3 className="text-xl font-bold">Visit Us</h3>
                    <p className="text-gray-600">New Delhi, India</p>
                    <p className="text-lg font-bold text-black mt-2">Mon - Sat: 9AM - 6PM</p>
                </div>
            </section>

            {/* Contact Form */}
            <section className="bg-white py-12 px-6 shadow-lg max-w-4xl mx-auto rounded-lg">
                <h2 className="text-3xl font-bold text-black text-center">Send Us a Message</h2>
                <p className="text-center text-gray-600 mb-6">We’d love to hear from you!</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-purple-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-purple-500 w-full"
                    >
                        Send Message
                    </button>
                </form>
            </section>

            {/* Updated Google Map */}
            {/* Updated Google Map */}
            <div className="mt-12 max-w-6xl mx-auto px-6">
                <iframe
                    title="Our Location"
                    className="w-full h-72 rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3502.178985664478!2d77.3775672755005!3d28.624397275669228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM3JzI3LjgiTiA3N8KwMjInNDguNSJF!5e0!3m2!1sen!2sin!4v1748961185705!5m2!1sen!2sin"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>


            {/* FAQ Section */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-pink-600 text-center">Frequently Asked Questions</h2>
                <div className="mt-6">
                    <details className="bg-white p-4 rounded-lg shadow-lg mb-4">
                        <summary className="cursor-pointer font-bold text-lg">
                            How can I contact customer support?
                        </summary>
                        <p className="text-gray-600 mt-2">
                            You can reach us via phone at +91 98765 43210 or email us at support@mediease.com.
                        </p>
                    </details>
                    <details className="bg-white p-4 rounded-lg shadow-lg mb-4">
                        <summary className="cursor-pointer font-bold text-lg">
                            What are your working hours?
                        </summary>
                        <p className="text-gray-600 mt-2">Our customer support is available 24/7 to assist you.</p>
                    </details>
                    <details className="bg-white p-4 rounded-lg shadow-lg">
                        <summary className="cursor-pointer font-bold text-lg">Where is your office located?</summary>
                        <p className="text-gray-600 mt-2">Our headquarters is in New Delhi, India.</p>
                    </details>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
