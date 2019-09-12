import ServerOperatorGateway from '../domain/ServerOperatorGateway';
import FnitCommunityDatabase from './FnitCommunityDatabase';
import Player from '../model/Player';

export default class ServerOperatorMapper implements ServerOperatorGateway {
    async fetchPlayerBy(name: string): Promise<Player> {
        const docRef = FnitCommunityDatabase.collection('players').doc(name);

        const doc = await docRef.get();
        if (doc.exists) {
            const player = doc.data();

            if (this.isPlayer(player)) {
                return player;
            }
        }

        throw new Error('User Not Found');
    }

    private isPlayer(object: any): object is Player {
        return (object as Player).name !== undefined;
    }
}
