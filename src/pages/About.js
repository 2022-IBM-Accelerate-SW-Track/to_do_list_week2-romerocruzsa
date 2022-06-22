import "./About.css";
import profile_pic_sebastian from "../assets/profile_pic_sebastian.jpg";
import React, { Component } from 'react';
  
export default class About extends Component {
  render() {
    return (
      // <div>
      //   <p>Design your About me page </p> 
      // </div>
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={profile_pic_sebastian}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">A lil' bit about me!</div>
            <div className="brief_description">
              <p>Name: Sebastián A. Cruz Romero</p>
              <p>School: University of Puerto Rico, Mayagüez</p>
              <p>Major: Computer Science and Engineering</p>
              <p>Fun fact: I have 5 tattoos!</p>
              
              I'm working towards tailoring my academic and professional
              career towards the intersection of AI, Quantum Computing, 
              and Biomedical Engineering. I enjoy the occassional web dev
              projects too!
            </div>
          </div>
        </div>
      </div>
    )
  }
}