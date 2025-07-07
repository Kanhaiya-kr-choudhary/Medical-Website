import React, { useState, useEffect } from "react";

const images = [
    {
        image: "https://www.facs.org/media/fh5lrpb0/487506418.jpg?rnd=132960668908970000",
        title: "AI-Powered Healthcare",
        description: "Revolutionizing medical diagnostics with AI."
    },
    {
        image: "https://marvel-b1-cdn.bc0a.com/f00000000100045/www.elmhurst.edu/wp-content/uploads/2022/01/dnp-degree-illustration.jpg",
        title: "Remote Consultations",
        description: "Get expert medical advice anytime, anywhere."
    },
    {
        image: "https://media.istockphoto.com/id/1319031310/photo/doctor-writing-a-medical-prescription.jpg?s=612x612&w=0&k=20&c=DWZGM8lBb5Bun7cbxhKT1ruVxRC_itvFzA9jxgoA0N8=",
        title: "Your Health, Your Control",
        description: "Book tests, medicines, and doctor visits online."
    }
];

const Signup = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="flex bg-white rounded-lg shadow-lg w-3/4 max-w-4xl">

                {/* Left Side with Background Image Slider */}
                <div
                    className="w-1/2 p-10 flex flex-col justify-center items-center text-white relative bg-cover bg-center"
                    style={{ backgroundImage: `url(${images[currentImage].image})` }}
                >
                    {/* Dark Overlay for Better Text Visibility */}
                    <div className="absolute inset-0 bg-teal-600 opacity-60"></div>

                    {/* Text Over Image */}
                    <div className="relative text-center z-10">
                        <h2 className="text-2xl font-bold">{images[currentImage].title}</h2>
                        <p className="text-sm">{images[currentImage].description}</p>
                    </div>
                </div>

                {/* Right Side - Signup Form */}
                <div className="w-1/2 p-10">
                    <h2 className="text-xl font-bold">Sign Up</h2>
                    <p className="text-sm text-gray-500">Create an account to access healthcare services.</p>

                    {/* Name Input */}
                    <div className="mt-4 border-b border-gray-300 pb-2">
                        <input
                            type="text"
                            placeholder="Enter your Name"
                            className="w-full focus:outline-none"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mt-4 border-b border-gray-300 pb-2">
                        <input
                            type="email"
                            placeholder="Enter your Email"
                            className="w-full focus:outline-none"
                        />
                    </div>

                    {/* Mobile Number Input */}
                    <div className="mt-4 flex items-center border-b border-gray-300 pb-2">
                        <span className="text-lg mr-2">🇮🇳 +91</span>
                        <input
                            type="text"
                            placeholder="Enter your Mobile Number"
                            className="w-full focus:outline-none"
                        />
                    </div>

                    {/* Signup Button */}
                    <button className="w-full mt-6 bg-pink-600 text-white py-2 rounded-full flex justify-center items-center">
                        Sign Up ➡️
                    </button>

                    {/* Terms and Conditions */}
                    <p className="mt-4 text-xs text-gray-500">
                        By signing up, you agree with our{" "}
                        <span className="text-red-500">Terms and Conditions</span> &{" "}
                        <span className="text-red-500">Privacy Policy</span>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
