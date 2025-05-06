/**
 * Formats a given date into a string based on the provided locale and options.
 * 
 * @param {Date} date - The date object to be formatted.
 * @param {string} [locale='en-US'] - The locale to use for formatting (default is 'en-US').
 * @param {Object} [options={ year: 'numeric', month: '2-digit', day: '2-digit' }] - Options for date formatting.
 * @returns {string} The formatted date string.
 * @throws {TypeError} Throws if the provided argument is not a valid Date object.
 */
function formatDate(date, locale = 'en-US', options = { year: 'numeric', month: '2-digit', day: '2-digit' }) {
    if (!(date instanceof Date) || isNaN(date)) {
        throw new TypeError('Invalid date object provided.');
    }

    return new Intl.DateTimeFormat(locale, options).format(date);
}

module.exports = formatDate;