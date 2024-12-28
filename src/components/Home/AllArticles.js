import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/sliders.css";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    { label: "Al Zarooni Foundation", value: "foundation" },
    { label: "Al Zarooni Events", value: "event" },
    { label: "Al Zarooni Media", value: "media" },
    { label: "Al Zarooni Museum", value: "museum" },
    { label: "Al Zarooni Collection", value: "collection" },
  ];

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/articles");
        const fetchedArticles = response.data.data;
        setArticles(fetchedArticles);
        setFilteredArticles(fetchedArticles); // Show all articles by default
        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const filterByCategory = (category) => {
    if (category) {
      const filtered = articles.filter((article) => article.category === category);
      setFilteredArticles(filtered);
    } else {
      setFilteredArticles(articles); // Show all articles if no category is selected
    }
  };

  const truncateTitle = (title, maxLength = 50) => {
    return title.length > maxLength ? `${title.substring(0, maxLength)}...` : title;
  };

  if (loading) {
    return <div className="loading-container">Loading...</div>;
  }

  return (
    <div className="article-section">
      {/* Category Buttons */}
      <div className="category-buttons-container">
        {categories.map((category) => (
          <button
            key={category.value}
            className="category-button"
            onClick={() => filterByCategory(category.value)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Articles */}
      {filteredArticles.length === 0 ? (
        <div className="no-articles-message">No articles available for this category.</div>
      ) : (
        <div className="articles-container">
          {filteredArticles.map((article) => (
            <div key={article.id} className="article-card">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="article-card-image"
              />
              <div className="article-card-content">
              <h3
  className="article-card-title"
  title={article.title} /* Tooltip for full title */
>
  {article.title}
</h3>

                <p className="article-card-description">{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllArticles;
