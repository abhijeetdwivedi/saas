import { useForm, useWatch, Controller } from "react-hook-form";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";


function CreatePost() {
    const { control, ...methods } = useForm();
    const description = useWatch({ name: "description", control }) || "";
    const platforms = useWatch({ name: "selectedPlatforms", control }) || [];

    const onSubmit = async (data) => {
        const maxLengths = {
            Instagram: 2200,
            Twitter: 280,
        };

        const errors = [];

        (data.selectedPlatforms || []).forEach((platform) => {
            const max = maxLengths[platform];
            if (data.description.length > max) {
                errors.push(`${platform} allows only ${max} characters`);
            }
        });

        if (errors.length > 0) {
            alert("Description too long:\n" + errors.join("\n"));
            return;
        }

        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("date", data.date);
        formData.append("time", data.time);
        formData.append("platforms", JSON.stringify(data.selectedPlatforms));
        mediaFiles.forEach((file, index) => {
            formData.append(`media${index + 1}`, file);
        });

        try {
            const res = await axios.post("http://localhost:3000/api/v2/posts/create", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log("Post created:", res.data);
        } catch (err) {
            console.error("Failed to create post:", err.response?.data || err.message);
        }
    };

    // Media upload state and handler
    const [mediaFiles, setMediaFiles] = React.useState([]);
    const handleFileChange = (e) => {
        setMediaFiles(Array.from(e.target.files));
    };
    const mediaName = mediaFiles.length > 0
        ? mediaFiles.map(f => f.name).join(", ")
        : "";

    return (
        <form onSubmit={methods.handleSubmit(onSubmit)} className="p-6 max-w-4xl mx-auto bg-white rounded-md shadow space-y-6">
            {/* Title */}
            <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" type="text" {...methods.register("title")} />
            </div>

            {/* Description */}
            <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" {...methods.register("description")} />
                {description && (
                    <p className="text-sm mt-1 text-gray-600">
                        {description.length} characters
                        {platforms.length > 0 && (() => {
                            const maxLengths = {
                                Instagram: 2200,
                                Twitter: 280,
                            };
                            const errors = platforms
                                .filter(p => description.length > maxLengths[p])
                                .map(p => `${p} limit is ${maxLengths[p]}`);
                            return errors.length > 0 ? (
                                <span className="text-red-600 block">{errors.join(", ")}</span>
                            ) : null;
                        })()}
                    </p>
                )}
            </div>

            {/* Media Upload */}
            {/* <MediaUpload onChange={handleFileChange} mediaName={mediaName} /> */}

            {/* Date and Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" {...methods.register("date")} />
                </div>
                <div>
                    <Label htmlFor="time">Time</Label>
                    <Input id="time" type="time" {...methods.register("time")} />
                </div>
            </div>

            {/* Platform Selection */}
            <div>
                <Label className="block font-medium mb-2">Select Platforms</Label>
                {["Instagram", "Twitter"].map((platform) => (
                    <div key={platform} className="flex items-center space-x-2 mb-1">
                        <Controller
                            name="selectedPlatforms"
                            control={control}
                            render={({ field }) => (
                                <Checkbox
                                    id={platform}
                                    checked={field.value?.includes(platform) || false}
                                    onCheckedChange={(checked) => {
                                        const value = field.value || [];
                                        if (checked) {
                                            field.onChange([...value, platform]);
                                        } else {
                                            field.onChange(value.filter((item) => item !== platform));
                                        }
                                    }}
                                />
                            )}
                        />
                        <Label htmlFor={platform}>{platform}</Label>
                    </div>
                ))}
            </div>

            {/* Submit */}
            <div>
                <Button type="submit" className="w-full">
                    Schedule Post
                </Button>
            </div>
        </form>
    );
}

export default CreatePost;
