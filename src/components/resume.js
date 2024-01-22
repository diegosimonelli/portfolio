import React, { Component } from "react";
import { isCompositeComponent } from "react-dom/test-utils";

export default class Resume extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {data.education &&
              data.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      {/*<p>{item.Achievements}</p>*/}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                data.work && data.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                            {item.specialization}
                            <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em>
                          </p>
                          <p><em className="date">{item.jobAddress}</em></p>
                          {/* <p>
                          {item.Achievements1}<br/>
                          {item.Achievements2}<br/>
                          {item.Achievements3}
                          </p> */}
                       </div>

                    </div>

                  )
                })
              }
            </div> 
            </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <p>{data.skillsDescription}</p>
            <p>{data.skillsDescription2}</p>
            <p>{data.skillsDescription3}</p>
            <p>{data.skillsDescription4}</p>
            <div className="bars">
              <ul className="skills">
                {data.skills &&
                  data.skills.map((item) => {
                    return (
                      <li>
                        <span
                          className={`bar-expand ${item.skillname.toLowerCase()}`}
                        ></span>
                        <em>{item.skillname}</em>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
