import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AddArticle from "./AddArticle";
import AllArticles from "./components/Home/AllArticles";
import Home from "./components/Home/Home";
import ArticlesCarousel from "./components/Home/Article";
import StatSection from "./components/Home/stats";
import About from "./components/About/About";
import Event from "./components/events/event";
import Article from "./AllArticle";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/article" element={<AddArticle />} />
          <Route path="/al" element={<Article />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ar" element={<ArticlesCarousel />} />
          <Route path="/st" element={<StatSection />} />
          <Route path="/ab" element={<About />} />
          <Route path="/ev" element={<Event />} />
          <Route path="*" element={<Navigate to="/home" replace={true} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
