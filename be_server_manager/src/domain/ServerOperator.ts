import ServerOperatorInterface from './ServerOperatorInterface';
import ServerOperatorGateway from './ServerOperatorGateway';
import axios from 'axios';
import DiscordAuthor from '../entities/DiscordAuthor';
import Player from '../entities/Player';
import ReceiptModel from '../model/ReceiptModel';

export default class ServerOperator implements ServerOperatorInterface {
    private serverOperatorGateway: ServerOperatorGateway;

    constructor(serverOperatorGateway: ServerOperatorGateway) {
        this.serverOperatorGateway = serverOperatorGateway;
    }

    async joinRequestAccepter(receiptNumber: string, author: DiscordAuthor): Promise<Player> {
        const receipt: ReceiptModel = await this.serverOperatorGateway.inquiryReceipt(receiptNumber);

        if (receipt.activated === true) {
            throw new Error('この受付番号はすでに使用されています');
        }

        const discordAccount: DiscordAuthor = await this.serverOperatorGateway.registerDiscordAccount(author, receipt.uid);
        const player: Player = await this.serverOperatorGateway.fetchPlayerById(receipt.uid);

        if (await this.whitelist('add', player.name, discordAccount)) {
            const activationResult: boolean = await receipt.activate();
            if(activationResult) {
                return player;
            }
        }

        throw new Error('whitelistの登録に失敗しました');
    }

    async whitelist(type: 'add' | 'remove', playerName: string, author: DiscordAuthor): Promise<boolean> {
        const player: Player = await this.serverOperatorGateway.fetchPlayerByName(playerName);
        const transactionSaved = await this.serverOperatorGateway.saveWhitelistTransaction(type, player, author);

        if(transactionSaved) {
            // BE_ServerのSTDINに送信
            const command = `whitelist ${type} "${playerName}"`;
            const result = await axios.post('http://localhost:8888/command', {command});
            if(result.status === 200) {
                return true;
            }
        }

        throw new Error('Something went wrong.');
    }
}