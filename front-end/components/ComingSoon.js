import React from "react";

const ComingSoon = () => {
    return (
        <div className="flex justify-center items-center  mt-2 mb-4">
            <div className="bg-gradient-to-r from-pink-500 to-purple-500p-10 rounded-md shadow-lg p-3">
                <h1 className="text-5xl font-bold text-gray-800 mb-6">
                    Coming Soon!
                </h1>
                <p className="text-lg text-gray-800 mb-8">
                    We're working hard to bring you something awesome. Stay tuned!
                </p>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default ComingSoon;
