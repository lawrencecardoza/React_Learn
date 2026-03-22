import React from 'react'

const App = () => {
  return (
    <div className='container'>

      <nav>
        <a className="logo" href="#">
          <div className="logo-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <polygon points="8,2 14,13 2,13" fill="white" />
            </svg>
          </div>
          <span className="logo-text">MyBrand</span>
        </a>

        <ul className='nav-links'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Project</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>


        <button className='nav-btn'>Hire me</button>
      </nav>

      <section className='hero'>
        <h1>Hi , I'm Full Stack Developer </h1>
        <p>React aur Css se Clean UI banata hoon.</p>
        <button className='hero-btn'>Apply Me</button>
      </section>

    </div>
  )
}

export default App
