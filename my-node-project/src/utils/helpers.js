/**
 * Formats a given date into a string based on the provided locale and options.
 * 
 * @param {Date} date - The date object to be formatted.
 * @param {string} [locale='en-US'] - The locale to use for formatting (default is 'en-US').
 * @param {Object} [options={ year: 'numeric', month: '2-digit', day: '2-digit' }] - Options for date formatting.
 * @returns {string} The formatted date string.
 * @throws {TypeError} Throws if the provided argument is not a valid Date object.
 */
function localFormatDate(date, locale = 'en-US', options = { year: 'numeric', month: '2-digit', day: '2-digit' }) {
    if (!(date instanceof Date) || isNaN(date)) {
        throw new TypeError('Invalid date object provided.');
    }

    return new Intl.DateTimeFormat(locale, options).format(date);
}

const formatDate = require('./dateUtils/formatDate');

module.exports = {
    /**
     * Formats a given date into a string with the format 'MM/DD/YYYY'.
     * @param {Date} date - The date object to be formatted.
     * @param {string} [locale='en-US'] - The locale to use for formatting.
     * @param {Object} [options={ year: 'numeric', month: '2-digit', day: '2-digit' }] - Options for date formatting.
     * @returns {string} The formatted date string.
     * @throws {TypeError} Throws if the provided argument is not a valid Date object.
     */
    localFormatDate, // Export the local function with a new name

    /**
     * Generates a unique identifier string prefixed with 'id-'.
     * The identifier is created using a random number converted to a base-36 string.
     * 
     * @returns {string} A unique identifier in the format 'id-xxxxxxxxx'.
     * @throws {Error} Will not throw any exceptions.
     */
    generateId: function() {
        return 'id-' + Math.random().toString(36).substr(2, 9);
    }
};