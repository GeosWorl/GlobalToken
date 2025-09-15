


const { formatDate } = require('../helpers');



// Import the function to be tested
describe('formatDate() formatDate method', () => {
    // Happy Path Tests
    describe('Happy Paths', () => {
        test('should format a valid date object correctly', () => {
            // Arrange
            const date = new Date('2023-10-15');
            
            // Act
            const formattedDate = formatDate(date);
            
            // Assert
            expect(formattedDate).toBe('10/15/2023');
        });

        test('should format a date object with single-digit month and day correctly', () => {
            // Arrange
            const date = new Date('2023-01-05');
            
            // Act
            const formattedDate = formatDate(date);
            
            // Assert
            expect(formattedDate).toBe('01/05/2023');
        });
    });

    // Edge Case Tests
    describe('Edge Cases', () => {
        test('should handle invalid date input gracefully', () => {
            // Arrange
            const date = new Date('invalid-date');
            
            // Act
            const formattedDate = formatDate(date);
            
            // Assert
            expect(formattedDate).toBe('Invalid Date');
        });

        test('should handle null input gracefully', () => {
            // Arrange
            const date = null;
            
            // Act
            const formattedDate = formatDate(date);
            
            // Assert
            expect(formattedDate).toBe('Invalid Date');
        });

        test('should handle undefined input gracefully', () => {
            // Arrange
            const date = undefined;
            
            // Act
            const formattedDate = formatDate(date);
            
            // Assert
            expect(formattedDate).toBe('Invalid Date');
        });

        test('should handle non-date object input gracefully', () => {
            // Arrange
            const date = {};
            
            // Act
            const formattedDate = formatDate(date);
            
            // Assert
            expect(formattedDate).toBe('Invalid Date');
        });

        test('should handle date object with time component correctly', () => {
            // Arrange
            const date = new Date('2023-10-15T14:48:00');
            
            // Act
            const formattedDate = formatDate(date);
            
            // Assert
            expect(formattedDate).toBe('10/15/2023');
        });
    });
});