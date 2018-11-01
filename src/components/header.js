import React from 'react'
import { Link } from 'gatsby'

const links = ['About', 'Education', 'Exercise', 'Beers']

const generateLink = name => (
  <li className="nav-item" key={name.toLowerCase()}>
    <Link className="nav-link" to={name.toLowerCase()}>
      {name}
    </Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header className="page-header">
    <div className="container">
      <h1 className="site-title">
        <Link to="/">{siteTitle}</Link>
      </h1>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <a className="nav-link" href="https://career.royhewitt.com">
              Career
            </a>
          </li>
          {links.map(generateLink)}
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
