if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config();
}
const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;

// Use the connection string from the environment variables
const uri = process.env.DB_URL || 'mongodb+srv://moosamen1234:moodengmoo@cluster0.5xpkv.mongodb.net/asap_blogify';
const client = new MongoClient(uri);
const {connectMongoDB} =require("./DB/db.js")
let isConnected = false; // Track the connection status globally

// Function to connect to the database
async function connectToDatabase() {
  try {
    await client.connect(); // Establish connection
    console.log('Connected to MongoDB');
    isConnected = true;
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err.message);
  }
}

// Connect to the database on server start
connectToDatabase();

app.get('/', (req, res) => {
  // Check the connection status and return it
  const dbStatus = isConnected ? 'Connected' : 'Not Connected';
  res.send(`Database Connection Status: ${dbStatus}`);
});

app.get('/ping', (req, res) => {
  res.send('Hello World!');
});

app.use("/user", require("./routes.js"))


app.listen(port, () => {
  connectMongoDB()
  console.log(`Your server is running on http://localhost:${port}`);
});

