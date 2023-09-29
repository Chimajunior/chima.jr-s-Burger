import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/burgerHome.jpg"
import "../styles/Home.css"

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})`}}>
      <div className="headerContainer">
        <h1>Chima jr's Diner</h1>
        <p>PIZZA AND BURGER TO FIT ANY TASTE</p>
        <Link to="/menu" >
        <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
