import React from 'react';

function Header() {
    return (
        <div>
            {/* Add top padding to account for fixed navbar height */}
            <header className="text-white text-center pt-15"> {/* pt-20 ~ 80px */}
                <div className="bg-gray-100 min-h-screen">
                    {/* Hero Section */}
                    <header className="relative flex items-center justify-center min-h-[100vh]">
                        <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
                            <source src="video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 bg-opacity-40 h-auto"></div>
                        <div className="relative text-white text-center px-6 md:px-12">
                            <h1 className="text-4xl md:text-5xl font-bold text-black">
                                Included Health is designed to treat you better.
                            </h1>
                            <div className="md:w-1/2 text-center md:text-left">
                                <h2 className="text-3xl font-bold text-purple-600">Consult Specialist Doctors Online</h2>
                                <p className="mt-2 text-black text-2xl">
                                    On Video/Audio Call & Chat. Consult Doctors from Top Hospitals within 30 minutes.
                                </p>
                                <button
                                    href="#consult"
                                    className="mt-4 inline-block bg-purple-500 text-black px-6 py-3 rounded-lg font-medium shadow-md hover:bg-white cursor-pointer"
                                >
                                    Talk to Doctor
                                </button>
                            </div>
                        </div>
                    </header>
                </div>
            </header>
        </div>
    );
}

export default Header;
