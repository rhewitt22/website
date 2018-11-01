import React from 'react'
import { Link } from 'gatsby'

const links = ['About', 'Education', 'Exercise', 'Beers']

const generateLink = name => (
  <li
    key={name.toLowerCase()}
    style={{
      margin: '0',
    }}
  >
    <Link
      to={name.toLowerCase()}
      style={{
        color: 'white',
        display: 'block',
        padding: '.5rem',
        textDecoration: 'none',
      }}
    >
      {name}
    </Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: 'navy',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem 0',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav>
        <ul
          style={{
            display: 'flex',
            listStyle: 'none',
            margin: '0',
            padding: '0',
          }}
        >
          {links.map(generateLink)}
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
