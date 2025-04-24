/**
 * Utility functions for common operations.
 */
module.exports = {
    /**
     * Log a message with a timestamp.
     * @param {string} message - The message to log.
     */
    log: (message) => {
        console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
    },

    /**
     * Validate an email address.
     * @param {string} email - The email to validate.
     * @returns {boolean} - True if the email is valid, otherwise false.
     */
    validateEmail: (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    },

    /**
     * Generate a random unique ID.
     * @returns {string} - A generated unique ID.
     */
    generateId: () => {
        return 'id-' + Math.random().toString(36).substr(2, 9);
    },
};