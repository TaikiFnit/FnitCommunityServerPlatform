import Player from "../entities/Player";

class PlayerModel implements Player {
    name: string;
    uid: string;
    created_at: number;

    constructor(player: any) {
        if(PlayerModel.isPlayer(player)) {
            this.name = player.name;
            this.uid = player.uid;
            this.created_at = player.created_at;
            return;
        }

        throw new Error('invalid params for Player');
    }

    public static isPlayer(player: any): player is Player {
        return (
            typeof player.name === 'string' &&
            typeof player.uid === 'string' &&
            typeof player.created_at === 'number'
        );
    }
}

export default PlayerModel;