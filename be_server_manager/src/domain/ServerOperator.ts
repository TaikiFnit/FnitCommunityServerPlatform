import IServerOperator from "./IServerOperator";

export default class ServerOperator implements IServerOperator {
    addWhitelist(player_name: string) {
        console.log(`${player_name} has been added to whitelist`);
    }

    removeWhitelist(player_name: string) {
        console.log(`${player_name} has been removed from whitelist`);
    }
}