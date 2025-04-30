import React, { useState } from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils";


const Dashboard = () => {
    const [date, setDate] = React.useState(new Date());

    return (
        <div className="p-6 space-y-6  w-screen mx-auto">
            {/* Calendar Widget */}
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="  rounded-xl border w-full p-8  mx-auto"
                classNames={{
                    months: "flex flex-row gap-8 justify-center",
                    day: cn(
                        "w-40 h-15 text-xl  place-items-center mx-2 my-2 rounded-md hover:bg-slate-200 aria-selected:bg-blue-600 aria-selected:text-white"
                    ),
                    caption_label: "text-3xl font-semibold",
                    nav_button: "w-10 h-10 ",
                    head_cell: "text-xl font-medium mx-17 my-8 text-center text-gray-500 w-10",

                }}
            />

            <div className="grid md:grid-cols-2 gap-6">
                {/* Scheduled Posts Section */}
                <div className="bg-blue-600 text-white rounded-xl p-4 shadow-md">
                    <h2 className="font-semibold text-lg mb-4">Today's Scheduled Posts</h2>
                    <div className="space-y-4 text-sm">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <FaInstagram />
                                <span>New product launch</span>
                            </div>
                            <span>10:30 AM</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <FaTwitter />
                                <span>Weekly tips and tricks</span>
                            </div>
                            <span>01:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <FaLinkedin />
                                <span>Case study promotion</span>
                            </div>
                            <span>03:30 PM</span>
                        </div>
                    </div>
                </div>

                {/* Recent Activity Log */}
                <div className="bg-white text-gray-700 rounded-xl p-4 shadow-sm">
                    <h2 className="font-semibold text-lg mb-4">Recent Activity Log</h2>
                    <div className="space-y-4 text-sm">
                        {[1, 2, 3].map((i) => (
                            <div className="flex justify-between items-center" key={i}>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-gray-200" />
                                    <div className="w-40 h-2 bg-gray-200 rounded" />
                                </div>
                                <span className="text-xs text-gray-500">X hours ago</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
