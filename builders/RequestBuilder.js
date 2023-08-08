const createRequest = () => {
  const request = {
    requestId: "",
    studentName: "",
    tutorId: "",
    subjects: [],
    topics: [],
    status: "",
    requestDate: "",
    startTime: "",
    endTime: "",
    confirmationTime: "",
    location: "",
    additionalDetails: "",
    cancellationReason: "",
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

  const withConfirmationTime = (confirmationTime) => {
    request.confirmationTime = confirmationTime;
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

  const withCancellationReason = (cancellationReason) => {
    request.cancellationReason = cancellationReason;
    return builder;
  };

  const build = () => {
    return request;
  };

  const builder = {
    withRequestId,
    withStudentName,
    withTutorId,
    withSubjects,
    withTopics,
    withStatus,
    withRequestDate,
    withStartTime,
    withEndTime,
    withConfirmationTime,
    withLocation,
    withAdditionalDetails,
    withCancellationReason,
    build,
  };

  return builder;
};

export default createRequest;
