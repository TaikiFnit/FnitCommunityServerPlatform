import ServerOperator from "../../src/domain/ServerOperator";
import ServerOperatorMapper from "../../src/database/ServerOperatorMapper";

test("ServerOperator return value check", async () => {
    const serverOperator = new ServerOperator(new ServerOperatorMapper());
    const result1 = await serverOperator.addWhitelist('test');
    const result2 = await serverOperator.removeWhitelist('test');

    expect(result1).toBe(true);
    expect(result2).toBe(true);
});
