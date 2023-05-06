import React from "react";
import Image from "next/image";

const Prototype = () => {
    return (
        <div className="bg-gray-100 py-10 px-5 ">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl text-center">
                GlycoHeritage Prototype
            </h1>
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:px-8">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
                            Promoting healthier eating habits and improving diabetes management
                        </h2>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Our app provides recipe suggestions with glycemic index and load information, helping users make healthier food choices tailored to their needs. Additionally, our data collection feature allows users to monitor their blood sugar levels and evaluate the effectiveness of their dietary choices over time.
                        </p>
                    </div>
                    <div className="mt-10 md:mt-0 md:w-2/4 md:pl-10">
                        <iframe
                            className="border border-gray-300 rounded-md w-full h-128 md:h-auto"
                            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FL2M0Xzha1qKvTsT931A0EJ%2Findd%3Ftype%3Ddesign%26node-id%3D2-2%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D2%253A2"
                            allowFullScreen
                        ></iframe>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Prototype;
