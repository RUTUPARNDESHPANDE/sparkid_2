export const APPLICATION_STATUSES = [
  'Submitted',
  'Under Review',
  'Additional Information Required',
  'Approved',
  'Rejected',
  'Hall Ticket Generated',
  'Hall Ticket Reissued',
  'Hall Ticket Cancelled',
];

export const REVIEW_STATUSES = APPLICATION_STATUSES.slice(0, 5);

export const HALL_TICKET_READY_STATUSES = [
  'Hall Ticket Generated',
  'Hall Ticket Reissued',
];

export const EXAM_SESSIONS_STORAGE_KEY = 'sparkids_exam_sessions';

export const parseExamSessions = (serializedSessions) => {
  const sessions = JSON.parse(serializedSessions || '[]');
  if (!Array.isArray(sessions)) {
    throw new Error('Stored exam sessions must be an array.');
  }
  return sessions;
};

export const canAccessHallTicket = (application) =>
  Boolean(
    application &&
    HALL_TICKET_READY_STATUSES.includes(application.status) &&
    application.hallTicketNumber
  );

export const createHallTicketNumber = (applicationId, version = 1) =>
  `HT-${applicationId}-V${version}`;

export const withStatusHistory = (application, status, details = {}) => {
  const { historyDetails = {}, ...applicationUpdates } = details;
  const changedAt = new Date().toISOString();

  return {
    ...application,
    ...applicationUpdates,
    status,
    statusHistory: [
      ...(Array.isArray(application.statusHistory) ? application.statusHistory : []),
      { status, changedAt, ...historyDetails },
    ],
    updatedAt: changedAt,
  };
};
