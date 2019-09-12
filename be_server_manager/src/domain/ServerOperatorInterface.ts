import DiscordAuthor from "../entities/DiscordAuthor";

interface ServerOperatorInterface {
    joinRequestAccepter(receiptNumber: string, author: DiscordAuthor): Promise<boolean>;
    addWhitelist(playerName: string, author: DiscordAuthor): Promise<boolean>;
    removeWhitelist(playerName: string): Promise<boolean>;
}

export default ServerOperatorInterface;