import ServerOperatorInterface from "./ServerOperatorInterface";
import ServerOperatorGateway from "./ServerOperatorGateway";

export default class ServerOperator implements ServerOperatorInterface {
    private serverOperatorGateway: ServerOperatorGateway;

    constructor(serverOperatorGateway: ServerOperatorGateway) {
        this.serverOperatorGateway = serverOperatorGateway;
    }

    async addWhitelist(playerName: string) {
        const player  = await this.serverOperatorGateway.fetchPlayerBy(playerName);
        console.log(`${player.name} has been added to whitelist`);
        return true;
    }

    async removeWhitelist(playerName: string) {
        const player = await this.serverOperatorGateway.fetchPlayerBy(playerName);
        // console.log(`${player.name} (${player.xuid}) has been remove from whitelist`);
        return true;
    }
}