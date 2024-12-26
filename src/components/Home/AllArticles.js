import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "../../styles/Carousel.css";
import "../../styles/ArticlesCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AllArticles = () => {
  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: "ondemand",
    centerMode: true,
    centerPadding: "100px",
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
        setFilteredArticles(fetchedArticles.slice(0, 6)); // Default to first 6 articles
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
      const filtered = articles.filter(
        (article) => article.category === category
      );
      setFilteredArticles(filtered.slice(0, 6)); // Limit to 6 articles
    } else {
      setFilteredArticles(articles.slice(0, 6)); // Default to first 6 articles
    }
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
            key={category.value}
            className="btn btn-primary"
            onClick={() => filterByCategory(category.value)}
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className="carousel-container">
        {filteredArticles.length === 0 ? (
          <div className="text-center">
            No articles available for this category.
          </div>
        ) : (
          <Slider {...settings}>
            {filteredArticles.map((article) => (
              <div key={article.id} className="carousel-item">
                <div className="article-card">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="article-card-image"
                  />
                  <div className="article-card-title">{article.title}</div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default AllArticles;
