import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Course from '../components/Course'
import { gradePointAverage } from '../helpers/gpa'

// TODO: Add NCSU courses
// TODO: Add filtering/sorting
// TODO: Add/remove animations

const Education = ({ data }) => {
  const courses = data.allCoursesJson.edges
  return (
    <Layout>
      <h1>Courses</h1>
      <p>GPA: {gradePointAverage(courses)}</p>
      <ul className="card-list">
        {courses.map(({ node: course }) => (
          <Course
            key={course.departmentAbbrev + course.courseNumber}
            course={course}
          />
        ))}
      </ul>
    </Layout>
  )
}
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
          points
          semester
          year
          department
          departmentAbbrev
        }
      }
    }
  }
`

export default Education
