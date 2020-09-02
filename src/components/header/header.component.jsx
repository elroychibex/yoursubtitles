import React from "react";
import { Modal, Button } from "antd";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">
        <img
          src={logo}
          width={70}
          height={70}
          className="d-inline-block logo"
          alt={"Yoursubtitles Logo"}
        />
        YourSubtitles
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              TV Series
            </a>
          </li>
        </ul>
        <span className="nav-item">
          <a className="nav-link" href="#">
            Login
          </a>
          <Button type="primary" onClick={() => this.setModal1Visible(true)}>
            Display a modal dialog at 20px to Top
          </Button>
          <Modal
            title="20px to Top"
            style={{ top: 20 }}
            visible={this.state.modal1Visible}
            onOk={() => this.setModal1Visible(false)}
            onCancel={() => this.setModal1Visible(false)}>
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
          </Modal>
        </span>
      </div>
    </nav>
  );
};

export default Header;
