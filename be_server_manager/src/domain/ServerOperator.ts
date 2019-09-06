import { ServerOperatorInterface } from "./ServerOperatorInterface";

export default class ServerOperator implements ServerOperatorInterface {
    addWhitelist(playerName: string) {
        console.log(`${playerName} has been added to whitelist`);
        return true;
    }

    removeWhitelist(playerName: string) {
        console.log(`${playerName} has been removed from whitelist`);
        return true;
    }
}