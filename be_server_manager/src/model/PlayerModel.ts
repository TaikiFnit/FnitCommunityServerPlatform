import Player from '../entities/Player';

class PlayerModel implements Player {
    name: string;
    uid: string;
    createdAt: number;

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
            typeof player.createdAt === 'number'
        );
    }
}

export default PlayerModel;