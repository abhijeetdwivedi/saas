import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

function Test() {
    return (
        <div className='bg-blue-600 text-white font-medium'>
            <h2 className="font-semibold text-lg mb-4">Today's Scheduled Posts</h2>
            <ScrollArea className=" ">
                <div className="">
                    <div className="">
                        <div className="">
                            <div className="">
                                <span>Case study promotion</span>
                            </div>
                            <span>03:30 PM</span>
                        </div>
                    </div>
                </div>
            </ScrollArea>
        </div>
    )
}

export default Test
