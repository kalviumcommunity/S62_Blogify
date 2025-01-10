// Importing dependencies
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "../config/.env", // Adjust the path if needed
  });
}

const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

const DB_URL = process.env.DB_URL;

let db; // Variable to store MongoDB client connection

// Mongoose connection setup (for mongoose users)
const connectMongoose = () => {
  mongoose
    .connect(DB_URL)
    .then((data) => {
      console.log("DataBase successfully connected via Mongoose:", data.connection.host);
    })
    .catch((error) => {
      console.error("Error connecting to DataBase with Mongoose:", error.message);
    });
};

// Native MongoDB client connection setup (for MongoClient users)
const mongoclient = new MongoClient(DB_URL);

const connectMongoDB = async () => {
  try {
    await mongoclient.connect();
    db = mongoclient.db("asap_blogify");
    console.log("Connected to MongoDB Database via MongoClient");
  } catch (error) {
    console.error("Error connecting to MongoDB with MongoClient:", error);
    process.exit(1);
  }
};

const getMongoDB = async () => {
  
  if (!db) {
    throw new Error("Database not initialized. Call connectMongoDB first.");
  }
  return db;
};

// Function to determine which connection to use (Mongoose or MongoClient)
const connectDatabase = () => {
  if (process.env.USE_MONGOOSE === "true") {
    // Connect via Mongoose
    connectMongoose();
  } else {
    // Connect via native MongoDB client
    connectMongoDB();
  }
};

// Exporting for use in other parts of the app
module.exports = {
  connectDatabase,
  connectMongoose,
  connectMongoDB,
  getMongoDB,
};
