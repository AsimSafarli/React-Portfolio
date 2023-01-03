import React from 'react'

function Navbar() {
  return (
    <div>
      <div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span className="fs-4 text-light">AsimSafar</span>
      </a>

      <ul className="nav">
        <li className="nav-item"><a href="#" class="nav-link text-light" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="#" class="nav-link text-light">About me</a></li>
        <li className="nav-item"><a href="#" class="nav-link text-light">Contact</a></li>

      </ul>
    </header>
  </div>
    </div>
  )
}

export default Navbar
