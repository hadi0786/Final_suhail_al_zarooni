import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './event.css'; // Add appropriate styles
import Navbar from '../Home/NavBar';
import Footer from '../Home/Footer';

const Event = () => {
    const [latestBlogs, setLatestBlogs] = useState([]);
    const [eventBlogs, setEventBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 9;

    useEffect(() => {
        // Fetch all articles
        const fetchArticles = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/articles');
                const filteredBlogs = data.data.filter(blog => blog.category === 'event');
                setLatestBlogs(filteredBlogs.slice(0, 3));
                setEventBlogs(filteredBlogs);
            } catch (err) {
                console.error("Error fetching articles:", err);
            }
        };

        fetchArticles();
    }, []);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Pagination logic
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = eventBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    return (
        <div>
        <Navbar></Navbar>
        <div className="container">
            {/* Slider Section */}
            <section className="slider">
                {latestBlogs.map((blog, index) => (
                    <div key={index} className="slider-item" style={{ backgroundImage: `url(${blog.imageUrl})` }}>
                        <div className="slider-content">
                            <h2>{blog.title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 100) + "..." }} />
                        </div>
                    </div>
                ))}
            </section>

            {/* Event Blogs Section */}
            <section className="event-blogs">
                <h2 className="section-title">Al Zarooni Media</h2>
                <div className="blog-grid">
                    {currentBlogs.map((blog) => (
                        <div className="blog-card" key={blog._id}>
                            <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
                            <div className="blog-content">
                                <h3>{blog.title}</h3>
                                <div dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 100) + "..." }} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="pagination">
                    {Array.from({ length: Math.ceil(eventBlogs.length / blogsPerPage) }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => paginate(i + 1)}
                            className={`pagination-button ${currentPage === i + 1 ? 'active' : ''}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </section>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Event;
