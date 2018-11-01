import React from 'react'

import { getGradePoints } from '../helpers/gpa'

const Course = ({ course }) => (
  <li className="card">
    <h2>{course.title}</h2>
    <p className="course-metadata">
      {course.departmentAbbrev} {course.courseNumber} | {course.semester}{' '}
      {course.year}
    </p>
    <p>{course.description}</p>
    <hr />
    <ul className="course-grade-info">
      <li>
        <span>Credits</span>
        <span className="big-metadata">{course.credits}</span>
      </li>
      <li>
        <span>Grade</span>
        <span className="big-metadata">{course.grade}</span>
      </li>
      <li>
        <span>Points</span>
        <span className="big-metadata">
          {getGradePoints(course.credits, course.grade)}
        </span>
      </li>
    </ul>
  </li>
)

export default Course
