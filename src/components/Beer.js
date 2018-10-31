import React from 'react'

// TODO: Bubble animation for each beer
// https://codepen.io/twwoodward/pen/BzprRr

// TODO: Scales for IBUs, Gravity, Ratings
// TODO: Load more than 50 beers
// TODO: Add filtering/sorting
// TODO: Stack repeats?

const Beer = ({ checkin }) => {
  const { beer, brewery } = checkin
  return (
    <li
      style={{
        marginRight: '1rem',
        padding: '1rem',
        border: '1px solid black',
        flex: '1 1 250px',
        listStyle: 'none',
      }}
    >
      {beer.beer_name} by {brewery.brewery_name}, {beer.beer_abv}% (
      {beer.beer_ibu} IBUs)
      <br />
      <img src={checkin.beer.beer_label} alt={checkin.beer.beer_name} />
    </li>
  )
}

export default Beer
