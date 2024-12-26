import React, { useState } from 'react';
import axios from 'axios';
import './AddArticle.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddArticle = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('category', category);
        formData.append('content', content); // Rich text content
        formData.append('image', image);

        try {
            const response = await axios.post('http://localhost:5000/articles', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setMessage(response.data.message);
            setTitle('');
            setCategory('');
            setContent('');
            setImage(null);
        } catch (error) {
            setMessage('Error adding article');
        }
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-sm p-4" style={{ maxWidth: '700px', margin: 'auto' }}>
                <h2 className="text-center mb-4">Add Article</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter article title"
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <select
                            className="form-control"
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="event">Event</option>
                            <option value="foundation">Foundation</option>
                            <option value="collection">Collection</option>
                            <option value="museum">Museum</option>
                            <option value="media">Media</option>
                            <option value="update">update</option>
                        </select>
                    </div>
                    <div className="form-group mb-3">
    <label htmlFor="content" className="form-label">Content</label>
    <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        modules={{
            toolbar: [
                [{ header: [1, 2, 3, false] }],
                ['bold', 'italic', 'underline', 'strike'], // text styling
                [{ list: 'ordered' }, { list: 'bullet' }], // lists
                ['link', 'image'], // links and images
                ['clean'], // remove formatting
            ],
        }}
        formats={[
            'header',
            'bold',
            'italic',
            'underline',
            'strike',
            'list',
            'bullet',
            'link',
            'image',
        ]}
        style={{ height: '200px', marginBottom: '20px' }} // Adds extra spacing below the editor
    />
</div>
<div className="form-group mb-3">
    <label htmlFor="image" className="form-label">Image</label>
    <input
        type="file"
        className="form-control"
        id="image"
        onChange={(e) => setImage(e.target.files[0])}
        required
    />
</div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary w-50">Submit</button>
                    </div>
                </form>
                {message && <p className="text-center text-success mt-3">{message}</p>}
            </div>
        </div>
    );
};

export default AddArticle;
