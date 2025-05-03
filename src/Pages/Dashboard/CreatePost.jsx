import CreatePostForm from "../../components/ui/CreatePostForm";
import PostPreview from "../../components/ui/PostPreview";
import React from 'react'

function CreatePost() {
    return (
        <div className="ml-64 flex flex-col md:flex-row gap-6 p-6">
            <div className="w-full md:w-1/2">
                <CreatePostForm />
            </div>
            <div className="w-full md:w-1/2">
                <PostPreview />
            </div>
        </div>
    )
}

export default CreatePost
