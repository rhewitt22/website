export const getLetterValue = letter => {
  switch (letter) {
    case 'A':
      return 4
    case 'B':
      return 3
    case 'C':
      return 2
    case 'D':
      return 1
    case 'E':
      return 0
    default:
      return 0
  }
}

export const getGradePoints = (credits, grade) => {
  const gradeValue = getLetterValue(grade.charAt(0))
  return credits * gradeValue
}

export const gradePointAverage = courses => {
  return courses.reduce(
    (total, course, i, array) => {
      const isLastElement = i === array.length - 1
      total.points = total.points + course.node.points
      total.credits = total.credits + course.node.credits
      return isLastElement
        ? Math.round((total.points / total.credits) * 100) / 100
        : total
    },
    { points: 0, credits: 0 }
  )
}
