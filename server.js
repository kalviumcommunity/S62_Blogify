const express = require('express');
const app = express();

// Define the /ping route
app.get('/ping', (req, res) => {
  res.send('hi'); 
});

// Start the server
app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
