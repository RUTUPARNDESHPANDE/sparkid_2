import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import RegistrationForm from './RegistrationForm';

jest.mock('../utils/googleSheets', () => ({
  submitToGoogleSheets: jest.fn(),
}));

const originalRegistrationUrl = process.env.REACT_APP_GOOGLE_SHEETS_REGISTRATION_FORM;

afterEach(() => {
  localStorage.clear();
  if (originalRegistrationUrl === undefined) {
    delete process.env.REACT_APP_GOOGLE_SHEETS_REGISTRATION_FORM;
  } else {
    process.env.REACT_APP_GOOGLE_SHEETS_REGISTRATION_FORM = originalRegistrationUrl;
  }
});

test('saves and confirms a registration when no Google Sheets URL is configured', async () => {
  process.env.REACT_APP_GOOGLE_SHEETS_REGISTRATION_FORM = '';
  localStorage.setItem('sparkids_exam_sessions', JSON.stringify([{
    sessionId: 'session-1',
    examName: 'Spring Exam',
    course: 'Abacus',
    examDate: '2026-11-15',
    examTime: '10:00',
    reportingTime: '09:30',
    examCentre: 'Main Branch',
  }]));
  const onSuccess = jest.fn();
  const { container } = render(<RegistrationForm onSuccess={onSuccess} />);

  const values = {
    candidateName: 'Aarav Sharma',
    dateOfBirth: '2017-01-15',
    gender: 'Male',
    mobile: '9876543210',
    email: 'aarav@example.com',
    guardianName: 'Parent Sharma',
    guardianMobile: '9876543211',
    relationship: 'Father',
    school: 'Main School',
    grade: '3',
    course: 'Abacus',
    branch: 'Main Branch',
  };

  Object.entries(values).forEach(([name, value]) => {
    fireEvent.change(container.querySelector(`[name="${name}"]`), {
      target: { value },
    });
  });
  await screen.findByRole('option', { name: /Spring Exam/ });
  fireEvent.change(container.querySelector('[name="examSessionId"]'), {
    target: { value: 'session-1' },
  });
  fireEvent.submit(container.querySelector('form'));

  await waitFor(() => expect(onSuccess).toHaveBeenCalledTimes(1));
  expect(onSuccess.mock.calls[0][0].applicationId).toMatch(/^BSA-\d{4}-\d{6}$/);
  expect(JSON.parse(localStorage.getItem('sparkids_applications'))).toHaveLength(1);
  expect(container.querySelector('[name="candidateName"]')).toHaveValue('');
  expect(container.querySelector('[name="course"]')).toHaveValue('');
});
