function formatDate(date, locale = 'en-US', options = { year: 'numeric', month: '2-digit', day: '2-digit' }) {
    if (!(date instanceof Date) || isNaN(date)) {
        throw new TypeError('Invalid date object provided.');
    }

    return new Intl.DateTimeFormat(locale, options).format(date);
}

const formatDate = require('./dateUtils/formatDate'); // This overwrites the local function