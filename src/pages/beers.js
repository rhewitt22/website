import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Beer from '../components/Beer'

const Beers = ({ data }) => (
  <Layout>
    <h1>Beer</h1>
    <ol
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {data.allUntappdCheckin.edges.map(({ node: checkin }) => (
        <Beer key={checkin.id} checkin={checkin} />
      ))}
    </ol>
  </Layout>
)

export default Beers

export const query = graphql`
  query {
    allUntappdCheckin {
      edges {
        node {
          id
          recent_created_at
          count
          rating_score
          first_had
          beer {
            bid
            beer_name
            beer_label
            beer_abv
            beer_ibu
            beer_slug
            beer_style
            beer_description
            rating_score
            rating_count
          }
          brewery {
            brewery_id
            brewery_name
            brewery_slug
            brewery_type
            brewery_label
            brewery_page_url
          }
        }
      }
    }
  }
`
