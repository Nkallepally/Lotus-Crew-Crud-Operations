import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config() 


mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGOOSE_STRING, (data)=>{
    console.log("Database is connected succesfully")
}, (err)=>{
    console.log(err);
})

const db = mongoose.connection;
// a constant db which is a reference to the current MongoDB connection established by mongoose.

db.on('error', console.error.bind(console, 'connection error:'));
// an event listener for the "error" event on the db connection object

db.once('open', function() {
  console.log('Connected to MongoDB');
});
// an event listener for the "open" event on the db connection object. The function will be called once the 
// connection to MongoDB is open and a log message "Connected to MongoDB" will be displayed.

// module.exports = db;
export default db;