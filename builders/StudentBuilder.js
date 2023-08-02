// Student Builder function
const createStudent = () => {
  const student = {
    uid: "",
    email: "",
    displayName: "",
    role: 'student',
  };

  const withUid = (uid) => {
    student.uid = uid;
    return builder;
  };

  const withEmail = (email) => {
    student.email = email;
    return builder;
  };

  const withDisplayName = (displayName) => {
    student.displayName = displayName;
    return builder;
  };


  const build = () => {
    return student;
  };

  const builder = {
    withUid,
    withEmail,
    withDisplayName,
    build,
  };

  return builder;
};

export default createStudent;
