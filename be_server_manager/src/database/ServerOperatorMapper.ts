import ServerOperatorGateway from '../domain/ServerOperatorGateway';
import FnitCommunityDatabase from './FnitCommunityDatabase';
import Player from '../entities/Player';
import DiscordAuthor from "../entities/DiscordAuthor";
import Receipt from "../entities/Receipt";

export default class ServerOperatorMapper implements ServerOperatorGateway {
    async fetchPlayerByName(name: string): Promise<Player> {
        const snapshot = await FnitCommunityDatabase.collection('players').where('name', '==', name).get();

        if (!snapshot.empty) {
            snapshot.forEach(doc => {
                const player = doc.data();

                if (ServerOperatorMapper.isPlayer(player)) {
                    return player;
                }
            });
        }

        throw new Error('User Not Found');
    }

    async fetchPlayerByDiscordAuthor(author: DiscordAuthor): Promise<Player> {
        const discordSnapshot = await FnitCommunityDatabase.collection('discord_accounts').where('id', '==', author.id).get();

        if(!discordSnapshot.empty) {
            discordSnapshot.forEach(discordDoc => {
            });
        }

        throw new Error('User Not Found');
    }

    private static isPlayer(object: any): object is Player {
        return (object as Player).name !== undefined;
    }

    saveBanLog(playerId: string, executerUid: string): Promise<Ban> {
        return undefined;
    }

    inquiryReceipt(receiptNumber: string): Promise<{ receipt: Receipt }> {
        return undefined;
    }
}
