const express = require('express');
const router = express.Router();

let jobs = {};
let jobIdCounter = 1;

// Create a Job
router.post('/', (req, res) => {
  const jobData = req.body;
  const jobId = jobIdCounter++;
  jobs[jobId] = jobData;
  res.status(201).json({ id: jobId, job: jobData });
});

// Update a Job
router.put('/:jobId', (req, res) => {
  const jobId = parseInt(req.params.jobId);
  if (!jobs[jobId]) {
    return res.status(404).json({ error: 'Job not found' });
  }
  jobs[jobId] = req.body;
  res.json({ id: jobId, job: req.body });
});

// Delete a Job
router.delete('/:jobId', (req, res) => {
  const jobId = parseInt(req.params.jobId);
  if (!jobs[jobId]) {
    return res.status(404).json({ error: 'Job not found' });
  }
  delete jobs[jobId];
  res.status(204).send();
});

// Get All Jobs
router.get('/', (req, res) => {
  res.json({ jobs });
});

module.exports = router;
