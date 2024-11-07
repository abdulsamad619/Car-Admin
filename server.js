const express = require('express');
const Routes = require('./src/routes');
const {port} = require('./src/config')
const {errorHandler} = require('./src/middlewares/errorHandler')
const app = express();

app.use(express.json());

// Routes
app.use('/adminService', Routes);

app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
