// import React from 'react'

// function Head() {
//     return (
//         <div>
//             <section className="py-20 px-4 container mx-auto text-center">
//                 <h2 className="text-3xl font-bold text-black">Our Services</h2>
//                 <p className="mt-4 text-gray-700">We offer a range of healthcare solutions to keep you and your family healthy.</p>

//                 <div className="grid md:grid-cols-3 gap-8 mt-10">
//                     <div className="p-6 shadow-md border rounded-lg ">
//                         <img src="https://s29814.pcdn.co/wp-content/uploads/2016/05/shutterstock_1716024499.jpg.optimal.jpg" alt="Online Consultation" className="w-full h-40 object-cover rounded-lg mb-4 h-auto" />
//                         <h3 className="text-xl font-semibold">Online Consultation</h3>
//                         <p className="mt-2 text-gray-600">Talk to top doctors from the comfort of your home.</p>
//                     </div>
//                     <div className="p-6 shadow-md border rounded-lg">
//                         <img src="https://www.scripps.org/sparkle-assets/variants/hi_res_blood_test_samples_1200x750-59cd6b99366c6e716576ccd68351ed39_desktop_x++-1200x1200.jpg" alt="Lab Tests" className="w-full h-40 object-cover rounded-lg mb-4 h-auto" />
//                         <h3 className="text-xl font-semibold">Lab Tests</h3>
//                         <p className="mt-2 text-gray-600">Get your tests done with trusted labs and receive reports online.</p>
//                     </div>
//                     <div className="p-6 shadow-md border rounded-lg">
//                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsLUmml1HPyaC5vZ-jv9H2W1adXE6XDtsUVg&s" alt="Health Packages" className="w-full h-40 object-cover rounded-lg mb-4 h-auto" />
//                         <h3 className="text-xl font-semibold">Health Packages</h3>
//                         <p className="mt-2 text-gray-600">Choose affordable health checkup packages tailored for you.</p>
//                     </div>
//                 </div>
//             </section>

//             <section className="bg-gray-100 py-20 text-center">
//                 <div className="container mx-auto px-4">
//                     <h2 className="text-3xl font-bold text-black">Why Choose Us?</h2>
//                     <p className="mt-4 text-gray-700">We provide reliable healthcare services with ease and efficiency.</p>

//                     <div className="grid md:grid-cols-3 gap-8 mt-10">
//                         <div className="p-6 shadow-md border rounded-lg bg-white">
//                             <img src="https://media.istockphoto.com/id/1739325597/photo/nurse-senior-woman-and-smile-with-comfort-holding-hands-or-support-in-nursing-home-for.jpg?s=612x612&w=0&k=20&c=BMCKzCUYgUGPlSugqpmKVJ3tNzeh0Sv_HjYcKOrKuKI=" alt="Trusted Doctors" className="w-full h-40 object-cover rounded-lg mb-4 h-auto" />
//                             <h3 className="text-xl font-semibold">Trusted Doctors</h3>
//                             <p className="mt-2 text-gray-600">Consult with experienced and verified doctors.</p>
//                         </div>
//                         <div className="p-6 shadow-md border rounded-lg bg-white">
//                             <img src="https://www.who.int/images/default-source/health-topics/essential-medicines/cost-of-treatement.jpg?sfvrsn=4d34b3ee_0" alt="Affordable Pricing" className="w-full h-40 object-cover rounded-lg mb-4 h-auto" />
//                             <h3 className="text-xl font-semibold">Affordable Pricing</h3>
//                             <p className="mt-2 text-gray-600">Get the best healthcare services at competitive rates.</p>
//                         </div>
//                         <div className="p-6 shadow-md border rounded-lg bg-white">
//                             <img src="https://www.shutterstock.com/image-photo/smiling-brunette-female-doctor-talking-600nw-2323460383.jpg" alt="Quick & Easy Access" className="w-full h-40 object-cover rounded-lg mb-4 h-auto" />
//                             <h3 className="text-xl font-semibold">Quick & Easy Access</h3>
//                             <p className="mt-2 text-gray-600">Access medical services anytime, anywhere.</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>


//         </div>
//     )
// }

// export default Head

import React from "react";
import { motion } from "framer-motion";

// Animation variants for cards
const cardVariants = {
    offscreen: {
        y: 100,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 0.8,
        },
    },
};

// Animation variant for headings
const headingVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

function Card({ imgSrc, altText, title, description }) {
    return (
        <motion.div
            className="p-6 shadow-md border rounded-lg bg-white cursor-pointer"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(0,0,0,0.3)" }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <img
                src={imgSrc}
                alt={altText}
                className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
        </motion.div>
    );
}

function Head() {
    return (
        <div>
            <section className="py-20 px-4 container mx-auto text-center">
                <motion.h2
                    className="text-3xl font-bold text-black"
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Our Services
                </motion.h2>
                <motion.p
                    className="mt-4 text-gray-700"
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    We offer a range of healthcare solutions to keep you and your family
                    healthy.
                </motion.p>

                <div className="grid md:grid-cols-3 gap-8 mt-10">
                    <Card
                        imgSrc="https://s29814.pcdn.co/wp-content/uploads/2016/05/shutterstock_1716024499.jpg.optimal.jpg"
                        altText="Doctor consulting with patient online"
                        title="Online Consultation"
                        description="Talk to top doctors from the comfort of your home."
                    />
                    <Card
                        imgSrc="https://www.scripps.org/sparkle-assets/variants/hi_res_blood_test_samples_1200x750-59cd6b99366c6e716576ccd68351ed39_desktop_x++-1200x1200.jpg"
                        altText="Lab tests samples"
                        title="Lab Tests"
                        description="Get your tests done with trusted labs and receive reports online."
                    />
                    <Card
                        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsLUmml1HPyaC5vZ-jv9H2W1adXE6XDtsUVg&s"
                        altText="Health checkup packages"
                        title="Health Packages"
                        description="Choose affordable health checkup packages tailored for you."
                    />
                </div>
            </section>

            <section className="bg-gray-100 py-20 text-center">
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-3xl font-bold text-black"
                        variants={headingVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Why Choose Us?
                    </motion.h2>
                    <motion.p
                        className="mt-4 text-gray-700"
                        variants={headingVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        We provide reliable healthcare services with ease and efficiency.
                    </motion.p>

                    <div className="grid md:grid-cols-3 gap-8 mt-10">
                        <Card
                            imgSrc="https://media.istockphoto.com/id/1739325597/photo/nurse-senior-woman-and-smile-with-comfort-holding-hands-or-support-in-nursing-home-for.jpg?s=612x612&w=0&k=20&c=BMCKzCUYgUGPlSugqpmKVJ3tNzeh0Sv_HjYcKOrKuKI="
                            altText="Nurse comforting senior woman"
                            title="Trusted Doctors"
                            description="Consult with experienced and verified doctors."
                        />
                        <Card
                            imgSrc="https://www.who.int/images/default-source/health-topics/essential-medicines/cost-of-treatement.jpg?sfvrsn=4d34b3ee_0"
                            altText="Affordable healthcare pricing"
                            title="Affordable Pricing"
                            description="Get the best healthcare services at competitive rates."
                        />
                        <Card
                            imgSrc="https://www.shutterstock.com/image-photo/smiling-brunette-female-doctor-talking-600nw-2323460383.jpg"
                            altText="Female doctor talking to patient"
                            title="Quick & Easy Access"
                            description="Access medical services anytime, anywhere."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Head;






