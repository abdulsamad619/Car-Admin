const express = require('express');
const Routes = require('./routes');
const {port} = require('./config')
const {errorHandler} = require('./middlewares/errorHandler')
const app = express();

app.use(express.json());

// Routes
app.use('/routesSerivce', Routes);

app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
