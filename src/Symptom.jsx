import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const initialSymptoms = [
    { name: "Fever", image: "https://www.asterhospitals.in/sites/default/files/2023-02/fever-in-children.jpg" },
    { name: "Chest Pain", image: "https://www.visitcompletecare.com/wp-content/uploads/2020/11/shutterstock_526101595-scaled.jpg" },
    { name: "Cough & Cold", image: "https://images.indianexpress.com/2022/01/Cold-and-cough-remedy-4.jpg" },
    { name: "Constipation", image: "https://drramchandrasoni.in/wp-content/uploads/2023/02/Constipation-can-be-cured-Dr.-Ram-Chandra-Soni.jpeg" },
    { name: "Sore Throat", image: "https://trustcarehealth.com/uploads/Recurring-Strep-Throat-FB.jpg" },
    { name: "Infertility", image: "https://excelivf.com/wp-content/uploads/2023/09/What-is-Unexplained-Infertility-and-How-to-Treat-It-Dr-Rhythm-Gupta-IVF-Specialist-in-Delhi-03.jpg" },
    { name: "Irregular Periods", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwAkuz2w3K4N2Y1BMGC_n9LGvkjaMeV_eo0A&s" },
    { name: "Headache", image: "https://wakespine.com/wp-content/uploads/2024/01/How-to-Tell-if-Your-Headache-is-a-Sign-of-High-Blood-Pressure.jpg" },
    { name: "Abdominal Pain", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQarWMGKaMU3KPuAXFt_juQGWm08F-fQG8Zag&s" },
    { name: "Itching", image: "https://www.anveya.com/cdn/shop/articles/eczema_402319951_1_RESZED_1.jpg?v=1601653348" },
];

const additionalSymptoms = [
    { name: "Dizziness", image: "https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_21960_16419076590671225.jpg" },
    { name: "Fatigue", image: "https://media.istockphoto.com/id/1193289151/photo/exhausted-young-businessman-at-work.jpg?s=612x612&w=0&k=20&c=xaGUCMFPOILXtzc3soMdTGTZ4-l9WdOWu7sv4LYYI50=" },
    { name: "Nausea", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxU_NBn9gD47GsISvja8TlBOy8WbANQ8Bykw&s" },
    { name: "Joint Pain", image: "https://novusspinecenter.com/wp-content/uploads/2018/10/Joint-Pain_2000x1976.jpg" },
    { name: "Shortness of Breath", image: "https://media.istockphoto.com/id/1757962048/vector/shortness-of-breath-and-pulmonary-disease-icon.jpg?s=612x612&w=0&k=20&c=nE7UwdpWeJwKHcd1-msPfF2zlRwu1mZucIRgse1cYiI=" },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30, rotateX: 10 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            type: "spring",
            stiffness: 130,
            damping: 16,
        },
    },
    exit: { opacity: 0, y: 30, rotateX: 10, transition: { duration: 0.3 } },
};

const sectionTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const SymptomSection = () => {
    const [showMore, setShowMore] = useState(false);

    const handleToggle = () => setShowMore(!showMore);

    const symptomsToShow = showMore
        ? [...initialSymptoms, ...additionalSymptoms]
        : initialSymptoms;

    return (
        <section className="w-full py-12 px-6 bg-gray-100">
            {/* Header */}
            <motion.div
                className="text-center mb-8"
                initial="hidden"
                animate="visible"
                variants={sectionTextVariants}
            >
                <motion.h2 className="text-4xl font-bold text-black mb-2" variants={sectionTextVariants}>
                    Consult Doctor By Health Symptom
                </motion.h2>
                <motion.p className="text-lg text-gray-600" variants={sectionTextVariants}>
                    Select the health symptom to find relevant doctors
                </motion.p>
            </motion.div>

            {/* Symptoms Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                <AnimatePresence>
                    {symptomsToShow.map((symptom) => (
                        <motion.div
                            key={symptom.name}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.08,
                                rotateX: 6,
                                boxShadow: "0 10px 20px rgba(139, 92, 246, 0.6)",
                                transition: { type: "spring", stiffness: 280, damping: 18 },
                            }}
                            className="relative h-40 rounded-lg shadow-md cursor-pointer bg-cover bg-center will-change-transform"
                            style={{ backgroundImage: `url(${symptom.image})` }}
                        >
                            {/* Text Background */}
                            <div className="absolute bottom-0 w-full bg-white bg-opacity-90 py-2 rounded-b-lg">
                                <p className="text-black font-semibold text-center text-lg">{symptom.name}</p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Toggle Button */}
            <div className="flex justify-end mt-6">
                <motion.button
                    onClick={handleToggle}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(139, 92, 246, 0.7)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-purple-400 text-black font-semibold rounded-md transition-shadow duration-300"
                >
                    {showMore ? "View Less" : "View More"}
                </motion.button>
            </div>
        </section>
    );
};

export default SymptomSection;
