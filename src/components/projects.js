import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      /* Portfolio Section
   ================================================== */
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>
              <span>Check Out Some of My Projects</span>
            </h1>
            {/* portfolio-wrapper */}
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt="" src="images/portfolio/portfolio.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Portfolio Website</h5>
                        <p>JavaScript, HTML, CSS</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt="" src="images/portfolio/blackjack.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>BlackJack Game</h5>
                        <p>Java</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt="" src="images/portfolio/pokedex.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Pokedex Application</h5>
                        <p>Java</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt="" src="images/portfolio/charsorter.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Character Sorter Application</h5>
                        <p>Java</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>{" "}
              {/* item end */}
            </div>{" "}
            {/* portfolio-wrapper end */}
          </div>{" "}
          {/* twelve columns end */}
          {/* Modal Popup
        --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/portfolio_back.png"
              alt=""
            />
            <div className="description-box">
              <h4>Portfolio</h4>
              <p>
                Developed a personal website for my portfolio using React JS,
                Node JS, CSS, JQuery, and other frameworks.
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                Web design, Web Development, JavaScript, ReactJS, HTML, CSS,
                JQuery
              </span>
            </div>
            <div className="link-box">
              <a
                href="https://github.com/diegosimonelli/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Details
              </a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/blackjack_back.png"
              alt=""
            />
            <div className="description-box">
              <h4>BlackJack Game</h4>
              <p>
                Developed a Blackjack game in JAVA where the player must beat a
                bot dealer. Fully playable in command line.
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                Java, Command Line
              </span>
            </div>
            <div className="link-box">
              <a
                href="https://github.com/diegosimonelli/BlackJack"
                target="_blank"
                rel="noopener noreferrer"
              >
                Details
              </a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/pokedex_back.png"
              alt=""
            />
            <div className="description-box">
              <h4>Pokedex Application</h4>
              <p>
                Developed a Pokedex application in JAVA that stores new Pokemons
                encountered, shows stats, evolves them generating new stats and
                sort names. Fully playable in command line.
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                Java, Command Line
              </span>
            </div>
            <div className="link-box">
              <a
                href="https://github.com/diegosimonelli/Pokedex"
                target="_blank"
                rel="noopener noreferrer"
              >
                Details
              </a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/charsorter_back.png"
              alt=""
            />
            <div className="description-box">
              <h4>Character Sorter Application</h4>
              <p>
                Developed a Character frequency count project in JAVA that read
                in textual input from the user, analyze the frequency of each
                and output a sorted representation of the string to the user.
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                Java, Command Line
              </span>
            </div>
            <div className="link-box">
              <a
                href="https://github.com/diegosimonelli/CharacterSorter"
                target="_blank"
                rel="noopener noreferrer"
              >
                Details
              </a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-04 End */}
        </div>{" "}
        {/* row End */}
      </section> /* Portfolio Section End*/
    );
  }
}
