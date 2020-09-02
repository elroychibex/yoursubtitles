import React from "react";
import Sidebar from "../sidebar/sidebar.component";
const Homepage = () => {
  return (
    <div className="container">
      <div className="row py-4">
        <form className="w-75 mx-auto">
          <div className="form-group">
            <input
              className="form-control p-3 text-center"
              type="search"
              placeholder="Search TV Series and Movies Subtitles"
              aria-label="Search"
            />
          </div>
          <div className="form-row text-center">
            <div className="col-12">
              <button type="submit" className="btn btn-dark px-4 py-2">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="container">
        <div className="row py-4">
          <div className="col-lg-3 col-md-6 col-sm-12 my-1">
            <div className="card">
              <img
                className="card-img-top"
                src="img/placehold.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Card title that wraps to a new line
                </h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-1">
            <div className="card">
              <img
                className="card-img-top"
                src="img/placehold.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h4 className="card-title">
                  Card title that wraps to a new line
                </h4>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-1">
            <div className="card">
              <img
                className="card-img-top"
                src="img/placehold.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Card title that wraps to a new line
                </h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-1">
            <Sidebar />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row my-4">
          <h6>Recent Searches</h6>
          <div className="col-12">
            <a href="#" className="badge badge-dark p-2">
              tags
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
