import React from 'react'
import Profile from "../img/IMG_7273.jpeg"

const About = () => {
  return (
    <div>
        <section className="about-body" id="about">
            <div className="about-img">
                <img src={Profile} alt="" />
            </div>

            <div className="about-text">
                <h2>About <span>Me</span></h2>
                <div className="about-info">
                    <p>Name : Chanut Kidwat</p>
                    <p>Nickname : Nut</p>
                    <p>Age : 21 </p>
                    <p>Nationality : Thai</p>
                    <p>Email : chanut.kidw@gmail.com</p>
                    <p>Interested occupation : Frontend Developer</p>
                </div>
                <h3>Education</h3>
                <div className="about-education">
                    <p>Faculty : School of Technology Information</p>
                    <p>Major : Computer Science</p>
                    <p>GPA : 3.59</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About