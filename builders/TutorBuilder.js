const createTutor = () => {
  const tutor = {
    tutorId: "",
    name: "",
    email: "",
    subjects: [],
    topics: [],
    availableTimes: {},
    bio: {},
  };

  const withTutorId = (tutorId) => {
    tutor.tutorId = tutorId;
    return builder;
  };

  const withName = (name) => {
    tutor.name = name;
    return builder;
  };

  const withEmail = (email) => {
    tutor.email = email;
    return builder;
  };

  const withSubjects = (subjects) => {
    tutor.subjects = subjects;
    return builder;
  };

  const withTopics = (topics) => {
    tutor.topics = topics;
    return builder;
  };

  const withAvailableTimes = (availableTimes) => {
    tutor.availableTimes = availableTimes;
    return builder;
  };

  const withBio = (bio) => {
    tutor.bio = bio;
    return builder;
  };

  const build = () => {
    return tutor;
  };

  const builder = {
    withTutorId,
    withName,
    withEmail,
    withSubjects,
    withTopics,
    withAvailableTimes,
    withBio,
    build,
  };

  return builder;
};

export default createTutor;
