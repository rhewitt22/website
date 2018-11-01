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
      <div className="text-container">
        <h1>Courses</h1>

        <p>
          I graduated with a Bachelors of Science from the University of
          Maryland, College Park. My concentration was global environmental
          change, which includes climate and land-use change.
        </p>

        <p>
          I also took a number of graduate courses from North Carolina State
          University's Geographic Information Systems and Technology program.
        </p>

        <p>GPA: {gradePointAverage(courses)}</p>
      </div>
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
    allCoursesJson(sort: { fields: [year], order: DESC }) {
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
