import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-[#c2e1ff] flex justify-between items-center px-6 py-3">
            {/* Left: Logo */}
            <div className="text-2xl font-bold font-cursive">Logo</div>

            {/* Center: Nav Link */}
            <div className="text-base font-medium">
                <Link to="/" className="text-black hover:underline">
                    Home
                </Link>
            </div>

            {/* Right: Buttons */}
            <div className="flex items-center gap-4">
                <Link
                    to="/signup"
                    className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
                >
                    Sign Up
                </Link>
                <Link
                    to="/login"
                    className="border border-blue-500 text-black px-4 py-2 rounded-full hover:bg-blue-100 transition"
                >
                    Login
                </Link>
            </div>
        </nav>
    );
}
