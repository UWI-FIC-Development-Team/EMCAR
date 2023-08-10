const createRequest = () => {
  const request = {
    requestId: "",
    studentId: "",
    studentName: "",
    tutorId: "",
    tutorName: "",
    subjects: [],
    topics: [],
    status: "",
    requestDate: "",
    startTime: "",
    endTime: "",
    location: "",
    additionalDetails: "",
  };

  const withStudentId = (studentId) => {
    request.studentId = studentId;
    return builder;
  };

  const withRequestId = (requestId) => {
    request.requestId = requestId;
    return builder;
  };

  const withStudentName = (studentName) => {
    request.studentName = studentName;
    return builder;
  };

  const withTutorId = (tutorId) => {
    request.tutorId = tutorId;
    return builder;
  };

  const withTutorName = (tutorName) => {
    request.tutorName = tutorName;
    return builder;
  };

  const withSubjects = (subjects) => {
    request.subjects = subjects;
    return builder;
  };

  const withTopics = (topics) => {
    request.topics = topics;
    return builder;
  };

  const withStatus = (status) => {
    request.status = status;
    return builder;
  };

  const withRequestDate = (requestDate) => {
    request.requestDate = requestDate;
    return builder;
  };

  const withStartTime = (startTime) => {
    request.startTime = startTime;
    return builder;
  };

  const withEndTime = (endTime) => {
    request.endTime = endTime;
    return builder;
  };

  const withLocation = (location) => {
    request.location = location;
    return builder;
  };

  const withAdditionalDetails = (additionalDetails) => {
    request.additionalDetails = additionalDetails;
    return builder;
  };

  const build = () => {
    return request;
  };

  const builder = {
    withRequestId,
    withTutorName, // new field
    withStudentId, // new field
    withStudentName,
    withTutorId,
    withSubjects,
    withTopics,
    withStatus,
    withRequestDate,
    withStartTime,
    withEndTime,
    withLocation,
    withAdditionalDetails,
    build,
  };

  return builder;
};

export default createRequest;
