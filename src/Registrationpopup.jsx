import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "https://media.istockphoto.com/id/1988844230/photo/paediatric-medical-check-up.jpg?s=612x612&w=0&k=20&c=hz7jXpJmcvxSVkJLBucMOem1CYpjTGF-z0dUPGNSCgA=",
    "https://images.unsplash.com/photo-1551601651-2a8555f1a136?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNhbCUyMHRvdXJpc218ZW58MHx8MHx8fDA%3D",
    "https://bsmedia.business-standard.com/_media/bs/img/article/2023-12/17/full/1702832643-9438.jpg",
];

export default function RegistrationPopup() {
    const [isOpen, setIsOpen] = useState(false); // Initially closed
    const [isRegistered, setIsRegistered] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const intervalRef = useRef(null);

    // Show popup 5 seconds after page load
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(intervalRef.current);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        setIsRegistered(true);
        setTimeout(() => {
            setIsOpen(false);
        }, 4000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-40 z-50 backdrop-blur-sm p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                className="bg-white rounded-lg shadow-xl w-full max-w-6xl flex overflow-hidden"
                style={{ height: "500px" }}
            >
                {/* Left side: Image Slider */}
                <div className="relative w-1/2 rounded-l-lg overflow-hidden bg-gradient-to-tr from-purple-300 via-pink-200 to-pink-100 shadow-inner">
                    <AnimatePresence>
                        <motion.img
                            key={images[currentImageIndex]}
                            src={images[currentImageIndex]}
                            alt="Medical Slider"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-full object-cover"
                        />
                    </AnimatePresence>
                    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentImageIndex(idx)}
                                className={`w-4 h-4 rounded-full transition-colors ${idx === currentImageIndex
                                    ? "bg-pink-600 shadow-lg"
                                    : "bg-pink-300 hover:bg-pink-500"
                                    }`}
                                aria-label={`Slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right side: Registration form */}
                <div className="w-1/2 p-10 relative flex flex-col">
                    <button
                        onClick={handleClose}
                        className="absolute top-5 right-5 text-gray-500 hover:text-gray-900 text-3xl font-bold transition"
                        aria-label="Close"
                    >
                        &times;
                    </button>

                    {isRegistered ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex-grow flex items-center justify-center"
                        >
                            <h2 className="text-3xl font-semibold text-green-600 text-center">
                                Registration Successful!
                            </h2>
                        </motion.div>
                    ) : (
                        <>
                            <h2 className="text-4xl font-extrabold mb-8 text-center text-black">
                                Medical Registration
                            </h2>
                            <form
                                className="flex flex-col space-y-5 overflow-y-auto max-h-[390px]"
                                onSubmit={handleRegister}
                            >
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    required
                                    className="border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-4 focus:ring-purple-400 shadow-sm transition"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    required
                                    className="border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-4 focus:ring-purple-400 shadow-sm transition"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    required
                                    className="border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-4 focus:ring-purple-400 shadow-sm transition"
                                />
                                <input
                                    type="text"
                                    placeholder="Address"
                                    required
                                    className="border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-4 focus:ring-purple-400 shadow-sm transition"
                                />
                                <input
                                    type="date"
                                    placeholder="Date of Birth"
                                    required
                                    className="border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-4 focus:ring-purple-400 shadow-sm transition"
                                />
                                <input
                                    type="text"
                                    placeholder="Blood Group"
                                    required
                                    className="border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-4 focus:ring-purple-400 shadow-sm transition"
                                />
                                <button
                                    type="submit"
                                    className="mt-4 bg-purple-400 hover:bg-purple-500 text-black py-4 rounded-md font-semibold transition"
                                >
                                    Register
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
