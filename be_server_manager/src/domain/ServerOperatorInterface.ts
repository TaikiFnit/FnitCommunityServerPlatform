import DiscordAuthor from '../entities/DiscordAuthor';
import Player from "../entities/Player";

interface ServerOperatorInterface {
    joinRequestAccepter(receiptNumber: string, author: DiscordAuthor): Promise<Player>;
    whitelist(type: 'add' | 'remove', playerName: string, author: DiscordAuthor): Promise<boolean>;
}

export default ServerOperatorInterface;