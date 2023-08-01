class Request {
  constructor() {
    this.requestId = "";
    this.studentId = "";
    this.tutorId = "";
    this.subjects = [];
    this.topics = [];
    this.status = "";
    this.requestDate = "";
    this.startTime = "";
    this.endTime = "";
    this.confirmationTime = "";
    this.location = "";
    this.additionalDetails = "";
    this.cancellationReason = "";
  }
}

class RequestBuilder {
  constructor() {
    this.request = new Request();
  }

  withRequestId(requestId) {
    this.request.requestId = requestId;
    return this;
  }

  withStudentId(studentId) {
    this.request.studentId = studentId;
    return this;
  }

  withTutorId(tutorId) {
    this.request.tutorId = tutorId;
    return this;
  }

  withSubjects(subjects) {
    this.request.subjects = subjects;
    return this;
  }

  withTopics(topics) {
    this.request.topics = topics;
    return this;
  }

  withStatus(status) {
    this.request.status = status;
    return this;
  }

  withRequestDate(requestDate) {
    this.request.requestDate = requestDate;
    return this;
  }

  withStartTime(startTime) {
    this.request.startTime = startTime;
    return this;
  }

  withEndTime(endTime) {
    this.request.endTime = endTime;
    return this;
  }

  withConfirmationTime(confirmationTime) {
    this.request.confirmationTime = confirmationTime;
    return this;
  }

  withLocation(location) {
    this.request.location = location;
    return this;
  }

  withAdditionalDetails(additionalDetails) {
    this.request.additionalDetails = additionalDetails;
    return this;
  }

  withCancellationReason(cancellationReason) {
    this.request.cancellationReason = cancellationReason;
    return this;
  }

  build() {
    return this.request;
  }
}

