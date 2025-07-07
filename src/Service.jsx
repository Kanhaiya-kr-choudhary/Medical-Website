import React from "react";
import Footer from "./Footer";

const Services = () => {
    return (
        <div className="bg-gray-100">
            {/* Hero Section */}
            <div className="relative">
                <img
                    src="https://st4.depositphotos.com/9999814/28806/i/450/depositphotos_288060354-stock-photo-doctor-working-in-hospital-with.jpg"
                    alt="Healthcare Services"
                    className="w-full h-80 object-cover brightness-75"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center px-4">
                    <h1 className="text-4xl font-bold">Comprehensive Healthcare at Your Fingertips</h1>
                    <p className="mt-2 text-lg">Your trusted partner for online doctor consultations, lab tests, and medicine delivery.</p>
                </div>
            </div>

            {/* Our Services Section */}
            <div className="container mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-black text-center">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 text-center">
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <img
                            src="https://www.kindpng.com/picc/m/5-56164_prescription-medicine-logo-hd-png-download.png"
                            alt="Medicine Delivery"
                            className="w-20 mx-auto mb-4"
                        />
                        <h3 className="text-lg font-bold text-black">Medicine Delivery</h3>
                        <p className="text-gray-700">Order medicines online and get them delivered to your doorstep quickly and safely.</p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3315/3315896.png"
                            alt="Doctor Consultation"
                            className="w-20 mx-auto mb-4"
                        />
                        <h3 className="text-lg font-bold text-black">Doctor Consultation</h3>
                        <p className="text-gray-700">Consult top doctors from the comfort of your home for expert medical advice.</p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3898/3898060.png"
                            alt="Lab Tests"
                            className="w-20 mx-auto mb-4"
                        />
                        <h3 className="text-lg font-bold text-black">Lab Tests</h3>
                        <p className="text-gray-700">Book diagnostic tests and receive accurate reports online.</p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3050/3050801.png"
                            alt="Health Packages"
                            className="w-20 mx-auto mb-4"
                        />
                        <h3 className="text-lg font-bold text-black">Health Packages</h3>
                        <p className="text-gray-700">Get customized health checkups for preventive care.</p>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-blue-50 py-12 px-6 text-center">
                <h2 className="text-3xl font-bold text-black">Why Choose Us?</h2>
                <p className="text-gray-700 max-w-2xl mx-auto mt-4">
                    We are dedicated to making healthcare more **affordable, accessible, and efficient** with top-notch services and trusted professionals.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <h3 className="text-lg font-bold text-black">Fast & Reliable</h3>
                        <p className="text-gray-700">Quick services with doorstep delivery and online consultations.</p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <h3 className="text-lg font-bold text-black">Affordable Prices</h3>
                        <p className="text-gray-700">Healthcare solutions at reasonable prices for everyone.</p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <h3 className="text-lg font-bold text-black">24/7 Support</h3>
                        <p className="text-gray-700">Round-the-clock assistance for all your health concerns.</p>
                    </div>
                </div>
            </div>

            {/* Customer Testimonials */}
            <div className="container mx-auto px-6 py-12 text-center">
                <h2 className="text-3xl font-bold text-black">What Our Users Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <p className="text-gray-700">“The best online healthcare service I’ve ever used! Highly recommend.”</p>
                        <h4 className="text-lg font-bold text-black mt-4">— Anjali S.</h4>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <p className="text-gray-700">“Quick medicine delivery and easy doctor consultation, very reliable.”</p>
                        <h4 className="text-lg font-bold text-black mt-4">— Rahul T.</h4>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <p className="text-gray-700">“Lab test reports were accurate and delivered on time. Great experience!”</p>
                        <h4 className="text-lg font-bold text-black mt-4">— Priya K.</h4>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Services;
