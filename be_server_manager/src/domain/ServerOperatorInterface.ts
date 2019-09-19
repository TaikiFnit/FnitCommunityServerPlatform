import DiscordAuthor from '../entities/DiscordAuthor';
import Player from '../entities/Player';

interface ServerOperatorInterface {
    joinRequestAccepter(receiptNumber: string, author: DiscordAuthor): Promise<Player>;
    whitelist(type: 'add' | 'remove', playerName: string, author: DiscordAuthor): Promise<boolean>;
    playerConnectionUsecase(type: 'connected' | 'disconnected', playerName: string, xuid: string): Promise<boolean>;
}

export default ServerOperatorInterface;