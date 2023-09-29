import React from "react";
import MultiplePizza from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizza})` }}
      ></div>
      <div className="aboutBottom">
      <h1> ABOUT US</h1>
      <p>
      

<h2>Welcome to Chima Jr's.!</h2><br/>

Chima Jr's Diner. was founded in 2021 with a clear vision: to serve quality foods that empower families and individuals to thrive in the digital age. <br/><br/>

<h2>Our Mission</h2>

At Chima Jr's Diner., our mission is simple yet profound: to harness the power of food to solve real-world hunger and drive positive change. We are committed to delivering quality food that transform the way you eat, feel, and grow.<br/>

<h2>What Sets Us Apart</h2>

What sets Chima Jr's. apart is our relentless pursuit of excellence. We believe in staying ahead of the curve, and our team of talented chefs and waiters ensures that we remain at the forefront of resturants. We take pride in our ability to adapt, evolve, and deliver results.



        </p>
      </div>
    </div>
  );
}

export default About;
