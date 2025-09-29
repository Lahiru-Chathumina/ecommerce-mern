const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const userRoutes = require('./routes/userRoutes');

require('./config/db'); // MongoDB connect karana file eka

app.use(express.json());
app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});