import Player from '../entities/Player';
import DiscordAuthor from '../entities/DiscordAuthor';
import ReceiptModel from "../model/ReceiptModel";

interface ServerOperatorGateway {
    inquiryReceipt(receiptNumber: string): Promise<ReceiptModel>;
    registerDiscordAccount(discordAccount: DiscordAuthor, playerUid: string): Promise<DiscordAuthor>;
    fetchPlayerById(uid: string): Promise<Player>;
    fetchPlayerByName(name: string): Promise<Player>;
    saveWhitelistTransaction(type: 'add' | 'remove', target: Player, executer: DiscordAuthor): Promise<boolean>;
}

export default ServerOperatorGateway;
