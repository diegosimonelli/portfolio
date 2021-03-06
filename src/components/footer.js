import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    let data = this.props.data;
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {data.socialLinks &&
                data.socialLinks.map((item) => {
                  return (
                    <li>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className={item.className} />
                      </a>
                    </li>
                  );
                })}
            </ul>
            {
              <ul className="copyright">
                <li>© Copyright 2021 Diego Simonelli</li>
                <li>All rights reserved</li>
              </ul>
            }
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
