import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Workout from '../components/Workout'

// TODO: Separate workouts from runs
// TODO: Add filtering sorting

const Exercise = ({ data }) => (
  <Layout>
    <h1>Exercise</h1>
    <ol className="card-list">
      {data.allStravaWorkout.edges.map(({ node: workout }) => (
        <Workout key={workout.id} workout={workout} />
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
          type
          total_photo_count
          total_elevation_gain
          moving_time
          start_date
          elapsed_time
          achievement_count
          kudos_count
          comment_count
          photo_count
          average_speed
          max_speed
          pr_count
          total_elevation_gain
        }
      }
    }
  }
`

export default Exercise
