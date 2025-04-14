module.exports = {
    log: (message) => {
        console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
    },
    validateEmail: (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    },
    // Add more utility functions as needed
};