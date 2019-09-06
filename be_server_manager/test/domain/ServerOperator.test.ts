import ServerOperator from '../../src/domain/ServerOperator';

test('ServerOperator return value check', () => {
    const serverOperator = new ServerOperator();

    expect(serverOperator.addWhitelist('test')).toBe(true);
    expect(serverOperator.removeWhitelist('test')).toBe(true);
});

