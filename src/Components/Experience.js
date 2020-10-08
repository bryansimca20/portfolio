import React from "react";
import { NavLink } from "react-router-dom";
import UT from "../media/UT-small.jpg";
import BookStack from "../media/Book_Stack.svg"

const Experience = (props) => {
  return (
    <div className="row" id="about">
      <div className="w-100"></div>
      <div className="col">
        <h1 className="mb-4"
          style= {
            {
              borderBottom : "2px solid white",
              paddingBottom : "0.4em"
            }
          }>
          Experience
          </h1>
          <div className="row my-5">
            <div className="col-md-4 order-lg-1">
              <a href="https://www.uclabookstack.com">
              <img
                src={BookStack}
                className="img-fluid"
                alt="UT"
                style={
                  { 
                    borderRadius: "1em", 
                    backgroundColor: "white",
                    padding: "3em 1em",
                    maxWidth : "300px",
                    maxHeight : "300px"
                  }
                }
              />
              </a>
            </div>
            <div className="col-md mt-2 mt-md-0 order-lg-0">
              <h3 className="mb-2">Web Developer</h3>
              <span className="my-5">September 2020 - Present</span>
              <ul className="text-left mt-4">
                <li className = "my-2">
                  Collaborating on a group of 4 to create platform for UCLA students to buy and sell books 
                </li>
                <li className = "my-2">
                  Fixed minor layout issues in the front end 
                </li>
                <li className = "my-2">
                  Building an admin page to keep track of website analytics, such as user traffic and posts created, and present it in a graphical manner. 
                </li>
              </ul>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-md-4">
              <a href="https://en.wikipedia.org/wiki/United_Tractors">
              <img
                src={UT}
                className="img-fluid"
                alt="UT"
                style={{ borderRadius: "1em" }}
              />
              </a>
            </div>
            <div className="col-md mt-2 mt-md-0">
              <h3 className="mb-2">Mechanical Engineering Intern</h3>
              <span className="my-5">June 2019 - September 2019</span>
              <ul className="text-left mt-4">
                <li className = "my-2">
                  Inspected mechanical parts of damaged diesel engines such as crankshaft, fuel injection pump and piston with a
                  team of 5 engineers. Successfully troubleshot 10+ damaged diesel engine throughout Internship.
                </li>
                <li className = "my-2">
                  Machined various parts for dump truck assembly using various techniques such as milling and lathing.
                </li>
                <li className = "my-2">
                  Participated in optimizing fuel injection pump performance based on customer’s needs using fuel injection
                  pump testing machine.
                </li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Experience;
