const express = require('express');
const app = express();

const PORT = 8080;
// Define the /ping route
app.get('/', (req, res) => {
  res.send('hi'); 
});

// Start the server
app.listen(PORT, () => {
  console.log('Server is running on http://localhost:8080');
});
