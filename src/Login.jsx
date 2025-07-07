import React, { useState, useEffect } from "react";

const slides = [
    {
        image: "https://medicalbuyer.co.in/wp-content/uploads/2022/05/UP-govt-set-to-transform-health-sector-in-2-years.jpg",
        title: "Cost Effective",
        description: "Honest Price Guaranteed",
    },
    {
        image: "https://media.assettype.com/newindianexpress%2F2024-07%2F6cf84595-4d0d-42c3-b6ef-23d97ac0c3b1%2FHealthcare.jpg",
        title: "Advanced Healthcare",
        description: "Quality Treatment with Modern Technology",
    },
    {
        image: "https://nursesgroup.co.uk/assets/images/blog/healthcare-technology.jpg",
        title: "Digital Revolution",
        description: "Connecting Patients and Doctors Seamlessly",
    },
];

const Login = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="flex bg-white rounded-lg shadow-lg w-3/4 max-w-4xl overflow-hidden">

                {/* Left Side - Background Image & Dynamic Text */}
                <div
                    className="w-1/2 p-10 flex flex-col justify-center items-center text-white relative bg-cover bg-center transition-all duration-500"
                    style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
                >
                    {/* Dark Overlay for better readability */}
                    <div className="absolute inset-0 bg-teal-600 opacity-60"></div>

                    {/* Dynamic Text */}
                    <div className="relative text-center z-10 transition-opacity duration-500">
                        <h2 className="text-2xl font-bold">{slides[currentSlide].title}</h2>
                        <p className="text-sm">{slides[currentSlide].description}</p>
                    </div>
                </div>

                {/* Right Side - Login Form */}
                <div className="w-1/2 p-10">
                    <h2 className="text-xl font-bold">Login</h2>
                    <p className="text-sm text-gray-500">Please enter your Mobile Number to proceed</p>

                    <div className="mt-4 flex items-center border-b border-gray-300 pb-2">
                        <span className="text-lg mr-2">🇮🇳 +91</span>
                        <input
                            type="text"
                            placeholder="Enter your Mobile Number"
                            className="w-full focus:outline-none"
                        />
                    </div>

                    <button className="w-full mt-6 bg-pink-600 text-white py-2 rounded-full flex justify-center items-center">
                        Login ➡️
                    </button>

                    <div className="mt-4 bg-gray-100 p-3 rounded-md text-sm">
                        <span className="font-bold text-green-500">₹1000 Cash</span> in your wallet
                        <p className="text-xs text-gray-500">Use it for extra discounts on any test booking.</p>
                    </div>

                    <p className="mt-4 text-xs text-gray-500">
                        By proceeding, you agree with our{" "}
                        <span className="text-red-500">Terms and Conditions</span> &{" "}
                        <span className="text-red-500">Privacy Policy</span>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
