
  require('dotenv').config();
  const mongoose = require('mongoose');
  
  const connectDatabase = () => {
    
    mongoose
      .connect('mongodb+srv://moosamen1234:moodengmoo@cluster0.5xpkv.mongodb.net/')
      .then((data) => {
        console.log(
          `Database is connected Successfully: ${data.connection.host}`
        );
      })
      .catch((er) => console.log('Database connection Failed...', er.message));
  };
  
  module.exports = connectDatabase;