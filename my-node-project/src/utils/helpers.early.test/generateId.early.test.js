


const { generateId } = require('../helpers');



// my-node-project/src/utils/helpers.test.js
describe('generateId() generateId method', () => {
    // Happy Path Tests
    describe('Happy Paths', () => {
        test('should generate a string that starts with "id-"', () => {
            // Test to ensure the generated ID starts with 'id-'
            const id = generateId();
            expect(id.startsWith('id-')).toBe(true);
        });

        test('should generate a string of length 12', () => {
            // Test to ensure the generated ID has a length of 12 characters
            const id = generateId();
            expect(id.length).toBe(12);
        });

        test('should generate unique IDs on multiple calls', () => {
            // Test to ensure that multiple calls generate unique IDs
            const id1 = generateId();
            const id2 = generateId();
            expect(id1).not.toBe(id2);
        });
    });

    // Edge Case Tests
    describe('Edge Cases', () => {
        test('should generate a valid ID even when Math.random() returns a very small number', () => {
            // Mock Math.random to return a very small number
            const originalMathRandom = Math.random;
            Math.random = () => 0.0000001;
            const id = generateId();
            expect(id.startsWith('id-')).toBe(true);
            expect(id.length).toBe(12);
            Math.random = originalMathRandom; // Restore original Math.random
        });

        test('should generate a valid ID even when Math.random() returns a very large number', () => {
            // Mock Math.random to return a very large number
            const originalMathRandom = Math.random;
            Math.random = () => 0.9999999;
            const id = generateId();
            expect(id.startsWith('id-')).toBe(true);
            expect(id.length).toBe(12);
            Math.random = originalMathRandom; // Restore original Math.random
        });
    });
});