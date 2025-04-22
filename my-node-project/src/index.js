const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = process.env.PORT || 3000;

// Secret key for signing the token
const secretKey = process.env.JWT_SECRET || 'your-very-secure-secret'; // Use environment variable for security

// Create a payload (data to include in the token)
const payload = {
    userId: 123, // Example user ID
    username: 'exampleUser',
};

// Sign the token
const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour

console.log('Generated JWT:', token);

// To verify the token (optional)
try {
    const decoded = jwt.verify(token, secretKey);
    console.log('Decoded JWT:', decoded);
} catch (err) {
    console.error('Token verification failed:', err.message);
}

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});