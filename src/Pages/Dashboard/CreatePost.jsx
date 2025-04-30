import React from 'react'

function CreatePost() {
    return (
        <section>
            <div>
                <h1>Create Post</h1>
            </div>
            <div>
                <h2>Choose Platform</h2>
            </div>
            <div>
                <h2>Select Media</h2>
            </div>
            <div>
                <h2>Description</h2>
            </div>
            <div>
                <div><h2>Date</h2></div>
                <div><h2>Time</h2></div>
            </div>




                <input className='bg-blue-600' type="file" id="filePicker" webkitdirectory directory multiple />
        </section>
    )
}

export default CreatePost
