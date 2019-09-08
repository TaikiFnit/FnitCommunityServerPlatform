import ServerOperator from "../../src/domain/ServerOperator";
import ServerOperatorMapper from "../../src/database/ServerOperatorMapper";

test("ServerOperator return value check", async () => {
    const serverOperator = new ServerOperator(new ServerOperatorMapper());
    const result1 = await serverOperator.addWhitelist("fnit");
    const result2 = await serverOperator.removeWhitelist("fnit");

    expect(result1).toBe(true);
    expect(result2).toBe(true);
});
