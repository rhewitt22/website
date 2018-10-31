import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

// TODO: Add NCSU courses
// TODO: Add filtering/sorting
// TODO: GPA calculator
// TODO: Add/remove animations

const Courses = ({ data }) => (
  <Layout>
    <h1>Courses</h1>
    <ul>
      {data.allCoursesJson.edges.map(({ node: course }) => (
        <li key={course.departmentAbbrev + course.courseNumber}>
          {course.title}
        </li>
      ))}
    </ul>
  </Layout>
)

export const query = graphql`
  query {
    allCoursesJson {
      edges {
        node {
          title
          description
          grade
          credits
          courseNumber
          year
          department
          departmentAbbrev
        }
      }
    }
  }
`

export default Courses
