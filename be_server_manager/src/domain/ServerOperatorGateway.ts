import Player from '../entities/Player';
import DiscordAuthor from "../entities/DiscordAuthor";
import Receipt from "../entities/Receipt";

interface ServerOperatorGateway {
    inquiryReceipt(receiptNumber: string): Promise<{receipt: Receipt}>;
    fetchPlayerByName(name: string): Promise<Player>;
    fetchPlayerByDiscordAuthor(author: DiscordAuthor): Promise<Player>;
    saveBanLog(playerId: string, executerUid: string): Promise<Ban>;
}

export default ServerOperatorGateway;
