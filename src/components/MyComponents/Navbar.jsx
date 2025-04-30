import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiCalendar, FiFileText, FiLogOut } from 'react-icons/fi';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

const Navbar = () => {
    return (
        <div className="flex flex-col justify-between h-screen w-64 bg-blue-100 rounded-r-3xl p-6 shadow-md">
            <div>
                <h1 className="text-2xl font-bold mb-10">Product</h1>
                <nav className="flex flex-col space-y-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${isActive ? 'bg-blue-600 text-white' : 'text-black hover:bg-gray-100'
                            }`
                        }
                    >
                        <FiHome />
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="/create-post"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${isActive ? 'bg-blue-600 text-white' : 'text-black hover:bg-gray-100'
                            }`
                        }
                    >
                        <FiCalendar />
                        Create Post
                    </NavLink>

                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${isActive ? 'bg-blue-600 text-white' : 'text-black hover:bg-gray-100'
                            }`
                        }
                    >
                        <FiFileText />
                        Profile
                    </NavLink>
                </nav>
            </div>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="ghost"> <FiLogOut/>Logout</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Confirm logout</AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure want to logout?
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default Navbar;
