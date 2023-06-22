const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

//mongo db connection
const uri = process.env.ATLAS_URI;
mongoose.connect (uri, { useNewUrlParser : true, useUnifiedTopology : true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongo DB connection established successfully");
})



const feedbackRouter = require('./routes/feedback');
const studentRouter = require('./routes/user');
// const teacherRouter = require('./routes/teacher');
// const courseRouter = require('./routes/course');


app.use('/feedback', feedbackRouter);
app.use('/student', studentRouter);
// app.use('/teacher', teacherRouter);
// app.use('/course', courseRouter);

app.listen(port, () => {
    console.log(`Server is running on port:-${port}`);
});