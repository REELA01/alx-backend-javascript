const getStudentsByLocation = (students, city) => {
  const arr = students.filter((funtion) => funtion.location === city);
  return arr;
};

export default getStudentsByLocation;
