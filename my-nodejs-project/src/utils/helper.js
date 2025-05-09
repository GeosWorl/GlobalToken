module.exports = {
    log: (message) => {
        console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
    },
    validateEmail: (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    },
    formatDate: (date) => {
        return date.toISOString().split('T')[0]; // Returns date in YYYY-MM-DD format
    },
    generateRandomString: (length) => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    },
    email: 'collegekid360@icloud.com',
    // Add more utility functions as needed
};