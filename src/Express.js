const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect("mongodb+srv://jcapwell:177654321Jc@cluster0.ovz9x6x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define a schema and model for your data
const signupSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  country: String,
  zipCode: String,
  email: String,
  password: String,
  agreeTerms: Boolean,
});
const SignupModel = mongoose.model('Signup', signupSchema);

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to handle sign-up requests
app.post('/api/signup', async (req, res) => {
  try {
    const formData = req.body;
    const newSignup = new SignupModel(formData);
    await newSignup.save();
    res.status(201).send('Signup successful');
  } catch (error) {
    console.error('Error saving signup:', error);
    res.status(500).send('Error signing up');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});