import ServerOperatorInterface from './ServerOperatorInterface';
import ServerOperatorGateway from './ServerOperatorGateway';
import axios from 'axios';
import DiscordAuthor from '../entities/DiscordAuthor';
import Player from '../entities/Player';

export default class ServerOperator implements ServerOperatorInterface {
    private serverOperatorGateway: ServerOperatorGateway;

    constructor(serverOperatorGateway: ServerOperatorGateway) {
        this.serverOperatorGateway = serverOperatorGateway;
    }

    joinRequestAccepter(receiptNumber: string, author: DiscordAuthor): Promise<boolean> {
        return undefined;
    }

    async addWhitelist(playerName: string, author: DiscordAuthor): Promise<boolean> {
        // BE_ServerのSTDINに送信
        const command = `whitelist add ${playerName}`;
        const result = await axios.post('http://localhost:8888/command', {command});

        // トランザクションを保存
        const player: Player = await this.serverOperatorGateway.fetchPlayerByName(playerName);
        const executer: Player = await this.serverOperatorGateway.fetchPlayerByDiscordAuthor(author);
        // await this.serverOperatorGateway.saveBanLog(playerName, );

        if(result.status === 200) {

        }

        throw new Error();
    }

    async removeWhitelist(playerName: string) {
        // const player = await this.serverOperatorGateway.fetchPlayerBy(playerName);
        // console.log(`${player.name} (${player.xuid}) has been remove from whitelist`);
        return true;
    }
}