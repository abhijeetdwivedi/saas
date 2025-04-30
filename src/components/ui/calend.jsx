import React from "react";
import { Calendar } from "../components/ui/calendar";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function CalendarPage() {
    const [date, setDate] = React.useState(new Date());

    return (
        <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className=" text-white rounded-xl border p-8 max-w-[1000px] min-h-[500px] shadow-xl mx-auto"
            classNames={{
                months: "flex flex-row gap-8 justify-center",
                day: cn(
                    "w-16 h-16 text-lg m-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
                ),
                caption_label: "text-3xl font-semibold",
                nav_button: "w-10 h-10",
            }}
        />


    );
}

export default CalendarPage;
