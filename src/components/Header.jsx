import React from 'react'

const Header = () => {
  return (
    <div>
        <header>
            <a href="#" className="logo">Portfolio | Chanut</a>
            <ul className="menu-bar">
                <a href="#home" className="active">Home</a>
                <a href="#about">About</a>
                <a href="#work">My Work</a>
                <a href="#skill">My Skill</a>
                <a href="#contact">Contact</a>
         </ul>
        </header>
    </div>
  )
}

export default Header