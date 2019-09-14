import Player from '../entities/Player';
import { FieldValue } from '../database/FnitCommunityDatabase';

class PlayerModel implements Player {
    name: string;
    uid: string;
    createdAt: FieldValue;

    constructor(player: any) {
        if(PlayerModel.isPlayer(player)) {
            this.name = player.name;
            this.uid = player.uid;
            this.createdAt = player.createdAt;
            return;
        }

        throw new Error('invalid params for Player');
    }

    public static isPlayer(player: any): player is Player {
        return (
            typeof player.name === 'string' &&
            typeof player.uid === 'string' &&
            player.createdAt instanceof FieldValue
        );
    }
}

export default PlayerModel;