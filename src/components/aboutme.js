import React, { Component } from "react";

export default class AboutMe extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={require("../images/gators.png")}
              alt=""
            />
          </div>

          <div className="nine columns main-col">
            <h1>
              <span>About Me</span>
            </h1>
            <p>{data.aboutme}</p>
            <div className="button-res">
              {/*<button className="downloadResume">
                     <a href="Diego Simonelli RESUME.pdf" download>
                        Download Resume
                     </a>
                  </button>*/}
              <br />
            </div>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{data.name}</span>
                  <br></br>
                  <span>{data.address}</span>
                  <br></br>
                  <span>{data.website}</span>

                  <span>{data.email}</span>
                  <br></br>
                  <span>{data.phone}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a
                    className="button"
                    href="DiegoSimonelliRESUME.pdf"
                    download
                  >
                    <i className="fa fa-download" />
                    Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
