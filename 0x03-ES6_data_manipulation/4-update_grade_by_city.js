export default function updateStudentGradeByCity(Students, Locc, newGrades) {
  return Students
    .filter(({ location }) => location === Locc)
    .map((obj) => {
      const xtNewGrade = newGrades.filter(({ studentId }) => studentId === obj.id);
      const { grade = 'N/A' } = xtNewGrade.length > 0 ? xtNewGrade[0] : {};
      return { ...obj, grade };
    });
}
