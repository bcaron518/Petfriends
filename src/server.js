const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const PORT = process.env.PORT || 5000;

// Use cors middleware to enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route to handle sign-up requests
app.post('/api/signup', (req, res) => {
  const formData = req.body;
  // Here, you would handle the sign-up logic (e.g., save data to MongoDB)
  console.log('Received sign-up data:', formData);
  res.status(200).json({ message: 'Sign-up successful' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});