import EntranceOperator from '../../src/domain/EntranceOperator';
import EntranceOperatorInterface from "../../src/domain/EntranceOperatorInterface";
import EntranceOperatorMapper from "../../src/database/EntranceOperatorMapper";

test("EntranceOperator Test", async () => {
    const entranceOperator: EntranceOperatorInterface = new EntranceOperator(new EntranceOperatorMapper());

    const result1 = await entranceOperator.is_player_authenticated('fnit');
    expect(result1).toBe(false);

    const result2 = await entranceOperator.publish_receipt_number('fnit', '192.168.0.1');

    console.log('results');
    console.log(result1);
    console.log(result2);

    expect(result1).toBe(false);
    expect(result2).toMatch(/[0-9]{4}/);
});
