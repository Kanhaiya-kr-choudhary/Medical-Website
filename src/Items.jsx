import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const initialSpecialties = [
    { name: "General Physician", image: "https://reliefclinic.co.in/wp-content/uploads/2023/10/doctor-nurses-special-equipment.png.webp" },
    { name: "Gynaecology", image: "https://www.aimsindia.com/wp-content/uploads/2022/08/Untitled-2-6.png" },
    { name: "Dermatology", image: "https://www.felixhospital.com/sites/default/files/2022-11/best-dermatology-hospital-in-noida.png" },
    { name: "Diabetology", image: "https://saihospitaldombivli.com/wp-content/uploads/2023/07/diabetology.jpg" },
    { name: "Gastroenterology", image: "https://dl.geimshospital.com/uploads/image/MVqrli9s-Gastroenterology-100-1-jpg.webp" },
    { name: "Cardiology", image: "https://southdenver.com/wp-content/uploads/2021/09/invasive-cardiology.jpg" },
    { name: "Sexology", image: "https://www.womenshealthnetwork.com/wp-content/uploads/2013/10/iStock-1125912442.jpg" },
    { name: "Psychiatry", image: "https://aayush-hospitals.com/wp-content/uploads/2023/02/Psychiatry.png" },
    { name: "ENT", image: "https://mradamshakir.co.uk/wp-content/uploads/2020/12/ear-conditions.jpg" },
    { name: "Endocrinology", image: "https://dispurpolyclinichospitals.com/wp-content/uploads/2023/05/Endocrinology-min.png" },
];

const additionalSpecialties = [
    { name: "Nephrology", image: "https://my.clevelandclinic.org/-/scassets/images/org/health/articles/24214-nephrologist" },
    { name: "Oncology", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWh46eZ0Y0cNkd1doTfXdsyhkrxyaTe9_SQ&s" },
    { name: "Neurology", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEXU0ea6V5wKpDQd1i5-PFjqwSyAwV2j62Gw&s" },
    { name: "Orthopedics", image: "https://api.neohospital.com/uploads/categories/image-1725347663461-296185996-Spirometry.jpg" },
    { name: "Pulmonology", image: "https://arvhospital.com/wp-content/uploads/2020/08/Orthopedic-Treatment-for-all-your-Joints-and-Bones-Problem.png" }
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

const SpecialitySection = () => {
    const [showMore, setShowMore] = useState(false);

    const handleToggleView = () => setShowMore(!showMore);

    const specialtiesToDisplay = showMore
        ? [...initialSpecialties, ...additionalSpecialties]
        : initialSpecialties;

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
                    Consult Doctor By Speciality
                </motion.h2>
                <motion.p className="text-lg text-gray-600" variants={sectionTextVariants}>
                    Select Speciality To Find Relevant Doctors
                </motion.p>
            </motion.div>

            {/* Speciality Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                <AnimatePresence>
                    {specialtiesToDisplay.map((specialty) => (
                        <motion.div
                            key={specialty.name}
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
                            style={{ backgroundImage: `url(${specialty.image})` }}
                        >
                            <div className="absolute bottom-0 w-full bg-white bg-opacity-90 py-2 rounded-b-lg">
                                <p className="text-black font-semibold text-center text-lg">{specialty.name}</p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Toggle Button */}
            <div className="flex justify-end mt-6">
                <motion.button
                    onClick={handleToggleView}
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

export default SpecialitySection;
