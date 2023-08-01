class Tutor {
  constructor() {
    this.tutorId = "";
    this.name = "";
    this.email = "";
    this.subjects = [];
    this.topics = [];
    this.availableTimes = {};
    this.bio = {};
  }
}

class TutorBuilder {
  constructor() {
    this.tutor = new Tutor();
  }

  withTutorId(tutorId) {
    this.tutor.tutorId = tutorId;
    return this;
  }

  withName(name) {
    this.tutor.name = name;
    return this;
  }

  withEmail(email) {
    this.tutor.email = email;
    return this;
  }

  withSubjects(subjects) {
    this.tutor.subjects = subjects;
    return this;
  }

  withTopics(topics) {
    this.tutor.topics = topics;
    return this;
  }

  withAvailableTimes(availableTimes) {
    this.tutor.availableTimes = availableTimes;
    return this;
  }

  withBio(bio) {
    this.tutor.bio = bio;
    return this;
  }

  build() {
    return this.tutor;
  }
}

export default TutorBuilder;
