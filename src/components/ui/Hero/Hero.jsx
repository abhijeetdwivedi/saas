

import React from "react";
import { Link } from "react-router-dom";
import { ImageIcon } from "lucide-react";

export default function Hero() {
    return (
        <section className="bg-gradient-to-br from-[#56b5f6] to-[#0078f3] text-black min-h-screen flex items-center justify-center px-6 py-12">
            <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Left: Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Streamline Your Social <br /> Media Management Today
                    </h1>
                    <p className="text-base md:text-lg mb-8 text-black/80">
                        Easily manage, upload, and schedule your social media content across all platforms with our intuitive tool.
                        Start maximizing your online presence and engagement effortlessly.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                        <Link
                            to="/signup"
                            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
                        >
                            Sign Up
                        </Link>
                        <Link
                            to="/learn-more"
                            className="bg-white text-black border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-100 transition"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>

                {/* Right: Image Placeholder */}
                <div className="flex-1 flex justify-center">
                    <div className="w-full max-w-md aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                        <ImageIcon className="h-12 w-12 text-gray-400" />
                    </div>
                </div>
            </div>
        </section>
    );
}
