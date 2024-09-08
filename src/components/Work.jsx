import React from 'react'
import Cryptonite from "../img/Cryptonite_logo.png"
import Riski_logo from "../img/img_riskilogo.png"
import Sphere_logo from "../img/Sphere_logo_v3.png"

const Work = () => {
  return (
    <div>
        <section className="work-body" id="work">
            <h2>My Work<span>s</span></h2>
                <p className='proj-descrip'>During my time at university, I had the opportunity to work on various projects, which helped enhance my skills in programming, design, and collaboration with others. These projects strengthened my ability to solve problems creatively, work under pressure, and effectively function as part of a team.</p>
                <div className="work-link">
                    <div className="work-box">
                        <div className="img-proj"> <img src={Cryptonite} alt=""/> </div>
                        <a href="https://github.com/chanutkid/Cryptonite">Cryptonite</a>
                        <p>My Project is call "Crytonite". <br />It's a project I did when I was in my first year with my friends.</p>
                    </div>
                    <div className="work-box">
                        <div className="img-proj"> <img src={Riski_logo} alt=""/> </div>
                        <a href="https://github.com/chanutkid/Project-Riskiapartment">Riskiapartment</a>
                        <p>This is my project Riskiapartment. I am responsible for doing frontend development.</p>
                    </div>
                    <div className="work-box">
                        <div className="img-proj-sphere"> <img src={Sphere_logo} alt=""/> </div>
                        <a href="https://github.com/chanutkid/Sphere">Sphere</a>
                        <p>This is a website call "Sphere". I am responsible for doing frontend development.</p>
                    </div>
                </div>
        </section>
    </div>
  )
}

export default Work