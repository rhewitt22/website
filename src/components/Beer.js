import React from 'react'

// TODO: Bubble animation for each beer
// https://codepen.io/twwoodward/pen/BzprRr

// TODO: Scales for IBUs, Gravity, Ratings
// TODO: Load more than 50 beers
// TODO: Add filtering/sorting
// TODO: Stack repeats?

const getStackedCardClassName = count => {
  switch (count) {
    case 1:
      return ''
    case 2:
      return 'card-stacked-2'
    case 3:
      return 'card-stacked-3'
    default:
      return 'card-stacked-many'
  }
}

const Beer = ({ checkin }) => {
  const { beer, brewery } = checkin
  return (
    <li className={`card ${getStackedCardClassName(checkin.count)}`}>
      <h2>
        {beer.beer_name} by {brewery.brewery_name}
      </h2>
      Count: {checkin.count}
      <br />
      {beer.beer_abv}% ({beer.beer_ibu} IBUs)
      <br />
      <img src={checkin.beer.beer_label} alt={checkin.beer.beer_name} />
    </li>
  )
}

export default Beer
