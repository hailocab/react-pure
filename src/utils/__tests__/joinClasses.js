jest.dontMock('../joinClasses');

import joinClasses from '../joinClasses';

describe('joinClasses', () => {
    it('merges all values to a String', () => {
        let cls = joinClasses('hello', 'world');
        expect(cls).toBe('hello world');
    });

    it('removes falsy expressions', () => {
        let cls = joinClasses(
            'hello',
            null,
            !!'' && 'world',
            1 && 'there'
        );
        expect(cls).toBe('hello there');
    });
});
