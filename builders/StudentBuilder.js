class Student {
  constructor() {
    this.studentId = "";
    this.name = "";
    this.email = "";
  }
}


class StudentBuilder {
  constructor() {
    this.student = new Student();
  }

  withStudentId(studentId) {
    this.student.studentId = studentId;
    return this;
  }

  withName(name) {
    this.student.name = name;
    return this;
  }

  withEmail(email) {
    this.student.email = email;
    return this;
  }

  build() {
    return this.student;
  }
}

export default StudentBuilder
