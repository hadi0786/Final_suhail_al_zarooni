import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/ArticlesCarousel.css';

const AllArticles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const categories = ['Al Zarooni Foundation', 'Al Zarooni Events', 'Al Zarooni Media', 'Al Zarooni Museum', 'Al Zarooni Collection'];

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('http://localhost:5000/articles');
                setArticles(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching articles:', error);
                setLoading(false);
            }
        };
        fetchArticles();
    }, []);

    const filterByCategory = (category) => {
        const filtered = articles.filter(article => article.category === category);
        setArticles(filtered);
    };

    if (loading) {
        return <div className="text-center mt-5">Loading...</div>;
    }

    return (
        <div className="article-section">
            {/* Buttons row */}
            <div className="category-buttons text-center">
    {categories.map((category) => (
        <button
            key={category}
            className="btn btn-primary"
            onClick={() => filterByCategory(category)}
        >
            {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
    ))}
</div>


            {/* Articles carousel */}
            <div className="carousel">
                {articles.length === 0 ? (
                    <div className="text-center">No articles available for this category.</div>
                ) : (
                    articles.map((article) => (
                        <div className="carousel-item" key={article._id}>
                            <div className="article-card">
                                <img
                                    src={article.imageUrl}
                                    alt={article.title}
                                    className="article-card-image"
                                />
                                <div className="article-card-title">{article.title}</div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AllArticles;
