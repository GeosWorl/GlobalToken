const express = require('express');
const dotenv = require('dotenv');
const winston = require('winston');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT;

if (!PORT) {
    console.error("Fatal Error: PORT is not defined in the environment variables.");
    process.exit(1);
}

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    winston.error(err.message, err);
    res.status(500).send("Something failed.");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});