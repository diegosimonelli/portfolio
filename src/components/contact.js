import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <h1>
              <span>Help with a project?</span>
            </h1>
            <p className="lead">
              Feel free to contact me for any work or suggestions.
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <a
                href="mailto:dassimonelli@gmail.com?Subject=Portfolio%20Client"
                target="_top"
              >
                <i className="fa fa-envelope" /> Email: {data.email}
              </a>
              <br />
              <a href="tel:+17864054420">
                <i className="fa fa-phone-square" /> Phone:{data.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

/*function Contact() {
  return(
    <section id="contact">
      <div className="row section=head">
                              <div className="ten columns" >
                              <h2>Contact Me</h2>
                              <p className="lead">
                              Do you need help with a project? Feel free to contact me for any work or suggestions.
                              </p>
                                  <List>
                                      <ListItem>
                                          <ListItemContent className="listname" style={{ fontSize: '20px', fontFamily: 'opensans' }}>
                                              <i className="fa fa-envelope" aria-hidden="true" />
                                              <a href="mailto:dassimonelli@gmail.com?Subject=Portfolio%20Client" target="_top">dassimonelli@gmail.com</a>
                                          </ListItemContent>
                                      </ListItem>
                                      <ListItem>
                                          <ListItemContent className="listname" style={{ fontSize: '20px', fontFamily: 'opensans' }}>
                                              <i className="fa fa-phone-square" aria-hidden="false" />
                                              ‪<a href="tel:786-405-4420">(786)405-4420</a>
                                          </ListItemContent>
                                      </ListItem>
                                  </List>
                              </div>
        </div>
      </section>
                            
  );
}

export default Contact;*/
