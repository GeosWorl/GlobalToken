const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = process.env.PORT || 3000;

// Secret key for signing the token
if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET environment variable is not set. Please set it to a secure value.');
}
const secretKey = process.env.JWT_SECRET; // Use environment variable for security

// Create a payload (data to include in the token)
const payload = {
    userId: 123, // Example user ID
    username: 'exampleUser',
};

// Sign the token
const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour

if (process.env.NODE_ENV !== 'production') {
    console.log('Generated JWT:', token);
}

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