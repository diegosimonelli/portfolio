import React, { Component } from "react";
import Typical from "react-typical";

export default class Header extends Component {
  render() {
    let data = this.props.data;
    return (
      <React.Fragment>
        {/*generated code*/}
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#nav-wrap" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Projects
                </a>
              </li>
              {/*<li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>*/}
              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <img
                src={require("../images/logo.jpeg")}
                alt="Diego Simonelli"
                className="logo"
              />
              <h1 className="responsive-headline">{data.name}</h1>
              <h3>
                <Typical
                  steps={[
                    "Full Stack Software Engineer 💻",
                    500,
                    "Full Stack Software Engineer 📱",
                    500,
                    "Full Stack Software Engineer 💾",
                    500,
                    "Full Stack Software Engineer 🕹️",
                    500,
                    "Full Stack Software Engineer 🤓",
                    500,
                    "Full Stack Software Engineer ☕",
                    500,
                  ]}
                  loop={1}
                  wrapper="p"
                />
              </h3>
              <ul className="social">
                {data.socialLinks &&
                  data.socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className={item.className}></i>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
