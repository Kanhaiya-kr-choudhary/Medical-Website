import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-700 pb-10">

                {/* Know Us */}
                <div>
                    <h3 className="font-bold text-purple-400 mb-4">Know Us</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        {["About Us", "Contact Us", "Press Coverage", "Careers", "Business Partnership", "Become a Health Partner", "Corporate Governance"].map((item, index) => (
                            <li key={index} className="hover:text-purple-500 cursor-pointer">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Our Policies */}
                <div>
                    <h3 className="font-bold text-purple-400 mb-4">Our Policies</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        {["Privacy Policy", "Terms and Conditions", "Editorial Policy", "Return Policy", "IP Policy", "Grievance Redressal Policy", "Fake Jobs and Fraud Disclaimer"].map((item, index) => (
                            <li key={index} className="hover:text-purple-500 cursor-pointer">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Our Services */}
                <div>
                    <h3 className="font-bold text-purple-400 mb-4">Our Services</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        {["Order Medicines", "Book Lab Tests", "Consult a Doctor", "Ayurveda Articles", "Hindi Articles", "Care Plan"].map((item, index) => (
                            <li key={index} className="hover:text-purple-500 cursor-pointer">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Connect */}
                <div>
                    <h3 className="font-bold text-purple-400 mb-4">Connect with Us</h3>
                    <div className="flex gap-4 text-2xl">
                        <FaFacebook className="text-blue-500 cursor-pointer hover:scale-110 transition" aria-label="Facebook" />
                        <FaInstagram className="text-pink-500 cursor-pointer hover:scale-110 transition" aria-label="Instagram" />
                        <FaTwitter className="text-blue-400 cursor-pointer hover:scale-110 transition" aria-label="Twitter" />
                        <FaYoutube className="text-red-500 cursor-pointer hover:scale-110 transition" aria-label="YouTube" />
                        <FaLinkedin className="text-blue-600 cursor-pointer hover:scale-110 transition" aria-label="LinkedIn" />
                    </div>
                </div>

                {/* App Download */}
                <div>
                    <h3 className="font-bold text-purple-400 mb-4">Download App</h3>
                    <div className="space-y-4">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                            alt="Google Play"
                            className="w-32 hover:scale-105 transition"
                        />
                        <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                            alt="App Store"
                            className="w-32 hover:scale-105 transition"
                        />
                    </div>
                </div>
            </div>

            {/* Reliable, Secure, Affordable */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-10 text-sm text-gray-300">
                {[
                    { img: "https://img.icons8.com/ios-filled/50/ffffff/verified-account.png", title: "Reliable", text: "All products are from verified & licensed pharmacies. Labs are accredited." },
                    { img: "https://img.icons8.com/ios-filled/50/ffffff/lock-2.png", title: "Secure", text: "Secure Socket Layer (SSL), 128-bit encryption & PCI DSS compliant." },
                    { img: "https://img.icons8.com/ios-filled/50/ffffff/wallet.png", title: "Affordable", text: "Up to 50% off on health products & up to 80% off on tests/consultations." }
                ].map((item, index) => (
                    <div key={index}>
                        <img src={item.img} alt={item.title} className="mx-auto mb-2" />
                        <h4 className="font-bold text-purple-400 mb-1">{item.title}</h4>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>

            {/* Certifications */}
            <div className="text-center text-xs text-gray-300 mt-6 space-y-4">
                <div className="flex justify-center gap-6 items-center flex-wrap">
                    <img
                        src="https://www.legitscript.com/wp-content/uploads/2025/01/Certification-Seal-2025-300x325-wm@2x.png"
                        alt="LegitScript"
                        className="h-10"
                    />
                    <img
                        src="https://5.imimg.com/data5/SELLER/Default/2023/5/309472809/YK/ZB/EK/112074094/iso-13485-medical-devices-certification-500x500.jpg"
                        alt="ISO"
                        className="h-10"
                    />
                </div>
                <p>
                    India's only LegitScript and ISO/IEC 27001:2022 certified online healthcare platform
                </p>
            </div>
        </footer>
    );
};

export default Footer;
