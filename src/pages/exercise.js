import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

// TODO: Separate workouts from runs
// TODO: Add filtering sorting

const Exercise = ({ data }) => (
  <Layout>
    <h1>Exercise</h1>
    <ol>
      {data.allStravaWorkout.edges.map(({ node: workout }) => (
        <li key={workout.id}>
          {workout.type}: {workout.name}
        </li>
      ))}
    </ol>
  </Layout>
)

export const query = graphql`
  query {
    allStravaWorkout {
      edges {
        node {
          id
          name
          distance
          moving_time
          elapsed_time
          total_elevation_gain
          type
          achievement_count
          kudos_count
          comment_count
          photo_count
          average_speed
          max_speed
          pr_count
        }
      }
    }
  }
`

export default Exercise
