// import React from "react";

// const DoctorConsultation = () => {
//     return (
//         <section className="bg-gray-50 py-12 px-6">
//             <div className="container mx-auto space-y-12">

//                 {/* Top CTA Section */}
//                 <div className="bg-orange-100 p-6 rounded-lg flex justify-between items-center">
//                     <div>
//                         <h2 className="text-lg font-semibold text-gray-800">Not sure which doctor to consult?</h2>
//                         <p className="text-gray-600">Let us help you.</p>
//                     </div>
//                     <button className="flex items-center px-4 py-2 text-black border border-purple-500 rounded-full hover:bg-purple-300">
//                         📞 Call Us
//                     </button>
//                 </div>

//                 {/* Booking Steps */}
//                 <div>
//                     <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">How to book online doctor consultation</h2>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//                         {[
//                             { step: "1.", text: "Choose doctor specialisation" },
//                             { step: "2.", text: "Check doctor’s availability" },
//                             { step: "3.", text: "Select date & time slot" },
//                             { step: "4.", text: "Book an Appointment" },
//                         ].map((item, index) => (
//                             <div key={index} className="flex items-center space-x-4">
//                                 <span className="bg-purple-400 text-black px-4 py-2 rounded-md text-lg font-bold">{item.step}</span>
//                                 <p className="text-gray-700">{item.text}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Consultation Tips & Booking Form */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//                     {/* Tips Section */}
//                     <div className="bg-blue-50 p-6 rounded-lg col-span-2">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-4">How to get the best out of your doctor video consultation session</h2>
//                         <ul className="list-disc space-y-3 text-gray-700 pl-6">
//                             <li>Make a list of questions and concerns you want to highlight. Tell your doctor your symptoms clearly.</li>
//                             <li>Keep your medical history, such as previous test reports or prescriptions handy.</li>
//                             <li>Make sure there is no noise disturbance before connecting.</li>
//                             <li>It may be a good idea to have someone sit with you during the consultation.</li>
//                         </ul>
//                     </div>

//                     {/* Booking Form */}
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h3 className="text-xl font-bold text-gray-800">We are Here to Help!</h3>
//                         <p className="text-gray-600 mb-4">Get instant call back in few mins</p>
//                         <form className="space-y-4">
//                             <input type="text" placeholder="Full Name*" className="w-full px-4 py-2 border rounded-md" />
//                             <input type="text" placeholder="Enter 10-digit mobile no.*" className="w-full px-4 py-2 border rounded-md" />
//                             <select className="w-full px-4 py-2 border rounded-md">
//                                 <option>Gurgaon</option>
//                                 <option>Delhi</option>
//                                 <option>Mumbai</option>
//                             </select>
//                             <div className="flex items-start space-x-2">
//                                 <input type="checkbox" className="mt-1" />
//                                 <p className="text-xs text-gray-600">You hereby affirm & authorize Healthians to process the personal data as per the <a href="#" className="text-blue-600 underline">T&C</a>.</p>
//                             </div>
//                             <button className="w-full bg-purple-400 text-white py-2 rounded-md hover:bg-purple-300">Book an Appointment</button>
//                         </form>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default DoctorConsultation;


import React, { useState } from "react";
import { motion, AnimatePresence, useInView, useAnimation, useViewportScroll, useTransform } from "framer-motion";

const fadeSlideUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const listItemVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const inputFocusStyle = {
    scale: 1.05,
    boxShadow: "0 0 8px rgba(128, 0, 128, 0.6)"
};

const DoctorConsultation = () => {
    const [modalOpen, setModalOpen] = useState(false);

    // For parallax effect on images
    const { scrollY } = useViewportScroll();
    const yParallax = useTransform(scrollY, [0, 500], [0, 80]);

    // Hook for triggering animation on viewport entry
    const controls = useAnimation();
    const ref = React.useRef(null);
    const inView = useInView(ref, { once: true });

    React.useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);

    return (
        <section className="bg-gray-50 py-12 px-6" ref={ref}>
            <div className="container mx-auto space-y-12">

                {/* Top CTA Section */}
                <motion.div
                    className="bg-orange-100 p-6 rounded-lg flex justify-between items-center"
                    variants={fadeSlideUp}
                    initial="hidden"
                    animate={controls}
                >
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">Not sure which doctor to consult?</h2>
                        <p className="text-gray-600">Let us help you.</p>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: "#9f7aea" }}
                        whileTap={{ scale: 0.9, opacity: 0.7 }}
                        className="flex items-center px-4 py-2 text-black border border-purple-500 rounded-full"
                    >
                        📞 Call Us
                    </motion.button>
                </motion.div>

                {/* Booking Steps */}
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={fadeSlideUp}
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center relative inline-block">
                        How to book online doctor consultation
                        <motion.svg
                            width="100"
                            height="6"
                            viewBox="0 0 100 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute -bottom-1 left-1/2 transform -translate-x-1/2"
                        >
                            <motion.path
                                d="M0 3H100"
                                stroke="#9f7aea"
                                strokeWidth="6"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                        </motion.svg>
                    </h2>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
                        variants={staggerContainer}
                        initial="hidden"
                        animate={controls}
                    >
                        {[
                            { step: "1.", text: "Choose doctor specialisation" },
                            { step: "2.", text: "Check doctor’s availability" },
                            { step: "3.", text: "Select date & time slot" },
                            { step: "4.", text: "Book an Appointment" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md"
                                variants={listItemVariant}
                            >
                                <motion.span className="bg-purple-400 text-black px-4 py-2 rounded-md text-lg font-bold" layoutId={`step-${index}`}>
                                    {item.step}
                                </motion.span>
                                <p className="text-gray-700">{item.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Consultation Tips & Booking Form */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial="hidden"
                    animate={controls}
                    variants={fadeSlideUp}
                >
                    {/* Tips Section */}
                    <motion.div
                        className="bg-blue-50 p-6 rounded-lg col-span-2"
                        style={{ y: yParallax }}
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">How to get the best out of your doctor video consultation session</h2>
                        <ul className="list-disc space-y-3 text-gray-700 pl-6">
                            <motion.li variants={listItemVariant}>Make a list of questions and concerns you want to highlight. Tell your doctor your symptoms clearly.</motion.li>
                            <motion.li variants={listItemVariant}>Keep your medical history, such as previous test reports or prescriptions handy.</motion.li>
                            <motion.li variants={listItemVariant}>Make sure there is no noise disturbance before connecting.</motion.li>
                            <motion.li variants={listItemVariant}>It may be a good idea to have someone sit with you during the consultation.</motion.li>
                        </ul>
                    </motion.div>

                    {/* Booking Form */}
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-md"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
                    >
                        <h3 className="text-xl font-bold text-gray-800">We are Here to Help!</h3>
                        <p className="text-gray-600 mb-4">Get instant call back in few mins</p>
                        <form
                            className="space-y-4"
                            onSubmit={(e) => {
                                e.preventDefault();
                                setModalOpen(true);
                            }}
                        >
                            {["Full Name*", "Enter 10-digit mobile no.*"].map((placeholder, i) => (
                                <motion.input
                                    key={i}
                                    type="text"
                                    placeholder={placeholder}
                                    className="w-full px-4 py-2 border rounded-md"
                                    whileFocus={inputFocusStyle}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    required
                                />
                            ))}
                            <motion.select
                                className="w-full px-4 py-2 border rounded-md"
                                whileFocus={inputFocusStyle}
                                transition={{ type: "spring", stiffness: 300 }}
                                required
                            >
                                <option value="">Select Location</option>
                                <option value="gurgaon">Gurgaon</option>
                                <option value="delhi">Delhi</option>
                                <option value="mumbai">Mumbai</option>
                            </motion.select>
                            <div className="flex items-start space-x-2">
                                <input type="checkbox" id="terms" className="mt-1" required />
                                <label
                                    htmlFor="terms"
                                    className="text-xs text-gray-600 cursor-pointer"
                                >
                                    You hereby affirm & authorize Healthians to process the personal data as per the{" "}
                                    <a href="#" className="text-blue-600 underline">
                                        T&C
                                    </a>
                                    .
                                </label>
                            </div>
                            <motion.button
                                type="submit"
                                className="w-full bg-purple-400 text-white py-2 rounded-md"
                                whileHover={{ scale: 1.05, backgroundColor: "#805ad5" }}
                                whileTap={{ scale: 0.95, opacity: 0.8 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                Book an Appointment
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>

            </div>

            {/* Modal */}
            <AnimatePresence>
                {modalOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setModalOpen(false)}
                    >
                        <motion.div
                            className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-4"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <h3 className="text-2xl font-bold mb-4">Thank you!</h3>
                            <p>Your appointment request has been received. We will call you shortly.</p>
                            <button
                                className="mt-6 px-4 py-2 bg-purple-400 text-white rounded hover:bg-purple-500"
                                onClick={() => setModalOpen(false)}
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default DoctorConsultation;






