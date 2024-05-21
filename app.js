const express = require('express');
const bodyParser = require('body-parser');
const jobRoutes = require('./routes/jobs');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/jobs', jobRoutes);

app.listen(port, () => {
  console.log(`Job API listening at http://localhost:${port}`);
});
