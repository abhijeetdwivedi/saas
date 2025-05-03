import React from 'react'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext
} from "@/components/ui/carousel";

const MediaUpload = React.forwardRef(({ onChange, mediaName, mediaFiles = [] }, ref) => {
    return (
        <div className="space-y-1.5">
            <Label htmlFor="media">Select Media</Label>
            <Label className="inline-block bg-white border border-gray-300 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-50">
                Choose Image(s)
                <Input
                    id="media"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={onChange}
                    ref={ref}
                    className="hidden"
                />
            </Label>
            {mediaName && (
                <p className="text-sm text-gray-600">{mediaName}</p>
            )}
            {mediaFiles.length > 0 && (
                <Carousel className="w-full max-w-xs">
                    <CarouselContent className="flex items-center">
                        {mediaFiles.map((file, index) => (
                            <CarouselItem key={index} className="flex justify-center">
                                <div className="w-full h-48 flex items-center justify-center bg-gray-100 rounded">
                                    <img
                                        src={URL.createObjectURL(file)}
                                        alt={`media-${index}`}
                                        className="object-contain max-h-48 rounded"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            )}
        </div>
    );
});
MediaUpload.displayName = "MediaUpload";

export default MediaUpload
