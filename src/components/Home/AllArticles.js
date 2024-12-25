import React, {useEffect, useState} from "react";
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
    lazyLoad: 'ondemand',
    centerMode: true,
    centerPadding: '100px',
    
    speed: 100, // Speed of the transition
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false, // Show next/prev arrows
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  };
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const categories = [
    "Al Zarooni Foundation",
    "Al Zarooni Events",
    "Al Zarooni Media",
    "Al Zarooni Museum",
    "Al Zarooni Collection",
  ];

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/articles");
        setArticles(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const filterByCategory = (category) => {
    const filtered = articles.filter(
      (article) => article.category === category
    );
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
      {/* <div className="carousel">
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
            </div> */}
      <div className="carousel-container">
        {articles.length === 0 ? (
          <div className="text-center">
            No articles available for this category.
          </div>
        ) : (
          <Slider {...settings}>
            {articles.map((article) => (
              <div className="carousel-item">
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
      </div>{" "}
    </div>
  );
};

export default AllArticles;
