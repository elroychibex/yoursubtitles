import React, { Component } from "react";
import Header from "./components/header/header.component";
import HomePage from "./components/homepage/homepage.component";
import Footer from "./components/footer/footer.component";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <HomePage />
        <Footer />
      </div>
    );
  }
}

export default App;
