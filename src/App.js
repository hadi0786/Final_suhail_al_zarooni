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
import Hero from "./components/events/Hero-sec";
import Login from "./components/Dashboard/Login";
import AdminDashboard from "./components/Dashboard/Dashboard";
import Collection from "./components/events/Collection";
import Museum from "./components/events/Museum"
import Media from "./components/events/Media"
import Foundation from "./components/events/foundation"
import Register from "./components/Dashboard/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/article" element={<AddArticle />} />
          <Route path="/al" element={<Article />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/event" element={<Event />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/museum" element={<Museum />} />
          <Route path="/media" element={<Media />} />
          <Route path="*" element={<Navigate to="/home" replace={true} />} />
          <Route path="/adminlogin" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admindashboard" element={<AdminDashboard/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
