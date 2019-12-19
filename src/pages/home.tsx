import * as React from "react";
import "../assets/styles/home.css";

const Home = () => (
  <div>
    <div className="hero">
      <h1 className="title">Welcome to React/Typescript Components</h1>
      <p className="description">
        Explore components React supported by Typescript.
      </p>

      <div className="row row-home">
        <a href="/datatable" className="card card-home">
          <h3>Datatable &rarr;</h3>
          <p>Datatable client side component</p>
        </a>
        <a href="/contact" className="card card-home">
          <h3>Contact &rarr;</h3>
          <p>Exemple of a form</p>
        </a>
      </div>
    </div>
  </div>
);

export default Home;
