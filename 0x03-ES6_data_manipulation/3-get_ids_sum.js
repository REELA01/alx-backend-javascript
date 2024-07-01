const getStudentIdsSum = (Students) => {
  const id = Students.reduce(
    (acc, value) => acc + value.id, 0,
  );
  return id;
};

export default getStudentIdsSum;
