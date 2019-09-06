import ServerOperatorGateway from '../domain/ServerOperatorGateway';
import Player from "../model/Player";

export default class ServerOperatorMapper implements ServerOperatorGateway {
    fetchUserBy(name: string): Promise<Player> {
        return new Promise<Player>((resolve, reject) => {
            const player = {
                uid: '1',
                name: 'fnit',
                xuid: '11',
                ip: '192.',
                discord_account: 'dis#a',
                created_at: 153
            };

            resolve(player)
        });
    }
}
