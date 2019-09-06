import ServerOperatorMapper from '../../src/database/ServerOperatorMapper';
import Player from "../../src/model/Player";

test("ServerOperator return value check", async () => {
    const serverOperatorMapper = new ServerOperatorMapper();

    const player: Player = await serverOperatorMapper.fetchUserBy('test');

    expect(isPlayer(player)).toBe(true);
});

function isPlayer(object: any): object is Player {
    return 'name' in object;
}