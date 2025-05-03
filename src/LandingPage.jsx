import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/ui/Navbar/Navbar";

export default function LandingLayout() {
    const { pathname } = useLocation();

    // Hide Navbar on /login and /signup
    const hideNavbar = pathname === "/login" || pathname === "/signup";

    return (
        <div className="min-h-screen">
            {!hideNavbar && <Navbar />}
            <main>
                <Outlet />
            </main>
        </div>
    );
}
