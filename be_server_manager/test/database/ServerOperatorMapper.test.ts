import ServerOperatorMapper from "../../src/database/ServerOperatorMapper";
import Player from "../../src/model/Player";

function isPlayer(object: any): object is Player {
    return "name" in object;
}

test("ServerOperator return value check", async () => {
    const serverOperatorMapper = new ServerOperatorMapper();

    const result  = isPlayer(await serverOperatorMapper.fetchPlayerBy("fnit"));

    expect(result).toBe(true);
});

