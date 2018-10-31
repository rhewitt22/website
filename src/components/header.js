import React from 'react'
import { Link } from 'gatsby'

const links = ['About', 'Beers', 'Courses', 'Exercise']

const generateLink = name => (
  <li key={name.toLowerCase()} style={{}}>
    <Link to={name.toLowerCase()}>{name}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
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
          }}
        >
          {links.map(generateLink)}
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
