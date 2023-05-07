import { test, expect } from 'vitest';
import fetch from 'node-fetch';

test('GET /jobs returns an array of jobs', async () => {
  const response = await fetch('http://localhost:3000/jobs');
  const jobs = await response.json();
  expect(response.status).toBe(200);
  expect(Array.isArray(jobs)).toBe(true);
});

test('GET /saveJobs returns an array of saved jobs', async () => {
  const response = await fetch('http://localhost:3000/saveJob');
  const data = await response.json();

  expect(response.status).toBe(200);
  expect(data).toBeInstanceOf(Array);
});
test('GET /jobs/:id should return a single job with the specified ID', async () => {
  const response = await fetch(
    'http://localhost:3000/jobs/6429f7ecfa405d784dd49b90'
  );
  const data = await response.json();

  expect(response.status).toBe(200);
  expect(data).toHaveProperty('jobTitle');
  expect(data).toHaveProperty('datePosted');
  expect(data).toHaveProperty('location');
  expect(data).toHaveProperty('salary');
  expect(data).toHaveProperty('employeeType');
  expect(data).toHaveProperty('jobDescription');
  expect(data).toHaveProperty('jobDuties');
  expect(data).toHaveProperty('jobExperience');
});

test('should create a new user', async () => {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: 879782372323,
    message: 'Hello world',
  };

  const response = await fetch(`http://localhost:3000/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  const data = await response.json();

  expect(response.status).toBe(201);
  expect(data).toHaveProperty('name', user.name);
  expect(data).toHaveProperty('email', user.email);
  expect(data).toHaveProperty('phone', user.phone);
  expect(data).toHaveProperty('message', user.message);
  expect(data).toHaveProperty('_id');
});
