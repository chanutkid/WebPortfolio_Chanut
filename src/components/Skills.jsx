import React from 'react'

const Skills = () => {
  return (
    <div>
        <section className="skill-body" id="skill">
            <h2>My Skill<span>s</span></h2>
            <div className="skill-text">
                <div className="skill-program">
                    <h4>Programming</h4>
                    <p className="point">HTML</p>
                    <p className="point">CSS</p>
                    <p className="point">Python</p>
                    <p className="point">JavaScript</p>
                </div>

                <div className="skill-tools">
                    <h4>Tools</h4>
                    <p className="point">Visual Studio Code</p>
                    <p className="point">Figma</p>
                </div>

                <div className="skill-personal">
                    <h4>Personal Skill</h4>
                    <p className="point">Teamwork</p>
                    <p className="point">Flexibility</p>
                    <p className="point">Communication</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Skills