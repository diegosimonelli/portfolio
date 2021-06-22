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
                        <p>React, JavaScript, HTML, CSS</p>
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
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-05" title>
                    <img alt="" src="images/portfolio/music-player.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Music Player WebApp</h5>
                        <p>React</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>{" "}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-06" title>
                    <img alt="" src="images/portfolio/filesharing.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>File Sharing WebApp</h5>
                        <p>Angular, File.io</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>{" "}
            </div>{" "}
            {/* portfolio-wrapper end */}
          </div>{" "}
          {/* twelve columns end */}
          {/* Modal Popup
        --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
          <a href="https://github.com/diegosimonelli/portfolio" target="_blank" rel="noopener noreferrer">
            <img
              className="scale-with-grid"
              src="images/portfolio/portfolio_back.png"
              alt=""
            />
          </a>
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
          <a href="https://github.com/diegosimonelli/BlackJack" target="_blank" rel="noopener noreferrer">
            <img
              className="scale-with-grid"
              src="images/portfolio/blackjack_back.png"
              alt=""
            />
          </a>
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
          <a href="https://github.com/diegosimonelli/Pokedex" target="_blank" rel="noopener noreferrer">
            <img
              className="scale-with-grid"
              src="images/portfolio/pokedex_back.png"
              alt=""
            />
          </a>
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
            <a href="https://github.com/diegosimonelli/CharacterSorter" target="_blank" rel="noopener noreferrer">
              <img
                className="scale-with-grid"
                src="images/portfolio/charsorter_back.png"
                alt=""
              />
            </a>
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
          <div id="modal-05" className="popup-modal mfp-hide">
            <a href="https://afterwaves.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img
                className="scale-with-grid"
                src="images/portfolio/musicplayer-back.png"
                alt=""
              />
            </a>
            <div className="description-box">
              <h4>Music Player WebApp</h4>
              <p>
                Developed a music player webapp with React. The user can listen to music, skip songs and search for more songs in the gallery.
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                React, CSS
              </span>
            </div>
            <div className="link-box">
              <a
                href="https://github.com/diegosimonelli/music-player"
                target="_blank"
                rel="noopener noreferrer"
              >
                Details
              </a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-05 End */}
          <div id="modal-06" className="popup-modal mfp-hide">
            <a href="https://filesharingbydiego.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img
                className="scale-with-grid"
                src="images/portfolio/filesharing-back.png"
                alt=""
              />
            </a>
            <div className="description-box">
              <h4>File Sharing WebApp</h4>
              <p>
                Developed file sharing app with Angular and File.io api. Users can safely send documents to friends.
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                Angular, Bootstrap, File.io
              </span>
            </div>
            <div className="link-box">
              <a
                href="https://github.com/diegosimonelli/file-sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Details
              </a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-06 End */}

        </div>{" "}
        {/* row End */}
      </section> /* Portfolio Section End*/
    );
  }
}
