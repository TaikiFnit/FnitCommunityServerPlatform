import ServerOperatorMapper from '../../src/database/ServerOperatorMapper';
import Player from '../../src/entities/Player';
import ReceiptModel from '../../src/model/ReceiptModel';

function isPlayer(object: any): object is Player {
    return 'name' in object;
}

// test('ServerOperator return value check', async () => {
    // const serverOperatorMapper = new ServerOperatorMapper();
    // const result  = isPlayer(await serverOperatorMapper.fetchPlayerBy('fnit'));

    // expect(result).toBe(true);
// });

test('inquery receipt test', async () => {
    const testNumber = '7763';
    const mapper = new ServerOperatorMapper();
    const result: ReceiptModel = await mapper.inquiryReceipt(testNumber);

    expect(result instanceof ReceiptModel).toBe(true);
    expect(result.number).toBe(testNumber);
});

