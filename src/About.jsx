import React from "react";
import Footer from "./Footer";

const About = () => {
    return (
        <div className="bg-gray-100">
            {/* Hero Section */}
            <div className="relative">
                <img
                    src="https://aaftonline.com/blog/wp-content/uploads/2023/12/What-is-Healthcare-Management-Definition-Roles-Careers-1.png"
                    alt="Healthcare"
                    // Full width and full height on large screens, cover mode to avoid cropping width
                    className="w-full h-80 object-cover brightness-75"
                />
                <div
                    className="absolute inset-0 flex flex-col items-center justify-center text-black text-center px-4
                     pt-20 md:pt-24 lg:pt-28" // padding top to avoid navbar overlap
                >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                        Empowering Healthcare, One Step at a Time
                    </h1>
                    <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl">
                        Affordable, Accessible, and Reliable Health Solutions for Everyone
                    </p>
                </div>
            </div>

            {/* About Us Section */}
            <div className="container mx-auto px-6 py-12 text-center">
                <h2 className="text-3xl font-bold text-black mb-4">Who We Are</h2>
                <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    At <span className="font-bold">MediEase</span>, we are revolutionizing healthcare by making
                    high-quality medical services accessible to everyone. We provide{" "}
                    <strong>medicine delivery, doctor consultations, lab tests, and healthcare services</strong> - all
                    at the convenience of your home.
                </p>
                <img
                    src="https://images.yourstory.com/cs/2/50c12d609a1911ec9fa62186d8a1a3b1/Imagexbf1-1646898536224.jpg?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75"
                    alt="Our Work"
                    className="w-full md:w-3/4 mx-auto mt-6 rounded-lg shadow-md"
                />
            </div>

            {/* Our Mission Section */}
            <div className="bg-blue-50 py-12 px-6 text-center">
                <h2 className="text-3xl font-bold text-black">Our Mission</h2>
                <p className="text-gray-700 max-w-2xl mx-auto mt-4">
                    To bring high-quality, <strong>affordable, and reliable</strong> healthcare services to every
                    doorstep, ensuring that no one is deprived of medical assistance.
                </p>
                <img
                    src="https://biharbhumilandrecord.com/wp-content/uploads/2024/08/National-Health-Mission-1200x675.png"
                    alt="Mission"
                    className="w-full md:w-3/4 mx-auto mt-6 rounded-lg shadow-md"
                />
            </div>

            {/* Our Impact Section */}
            <div className="container mx-auto py-12 px-6">
                <h2 className="text-3xl font-bold text-black text-center">Our Impact</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-6">
                    <div>
                        <h3 className="text-4xl font-bold text-black">10M+</h3>
                        <p className="text-gray-700">Users Served</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-black">500K+</h3>
                        <p className="text-gray-700">Lab Tests Done</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-black">25K+</h3>
                        <p className="text-gray-700">Doctors Onboard</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-black">300+</h3>
                        <p className="text-gray-700">Cities Covered</p>
                    </div>
                </div>
            </div>

            {/* Our Services Section */}
            <div className="bg-gray-50 py-12 px-6">
                <h2 className="text-3xl font-bold text-black text-center">Our Vision</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 text-center">
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <img
                            src="https://www.kindpng.com/picc/m/5-56164_prescription-medicine-logo-hd-png-download.png"
                            alt="Medicine Delivery"
                            className="w-20 mx-auto mb-4"
                        />
                        <h3 className="text-lg font-bold text-black">Medicine Delivery</h3>
                        <p className="text-gray-700">
                            Get medicines delivered to your doorstep with genuine quality assurance.
                        </p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3315/3315896.png"
                            alt="Doctor Consultation"
                            className="w-20 mx-auto mb-4"
                        />
                        <h3 className="text-lg font-bold text-black">Doctor Consultation</h3>
                        <p className="text-gray-700">Talk to top doctors online for expert medical advice.</p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3898/3898060.png"
                            alt="Lab Tests"
                            className="w-20 mx-auto mb-4"
                        />
                        <h3 className="text-lg font-bold text-black">Lab Tests</h3>
                        <p className="text-gray-700">Book lab tests from trusted diagnostic centers at home.</p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3050/3050801.png"
                            alt="Health Packages"
                            className="w-20 mx-auto mb-4"
                        />
                        <h3 className="text-lg font-bold text-black">Health Packages</h3>
                        <p className="text-gray-700">Comprehensive health checkups for every age group.</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default About;
