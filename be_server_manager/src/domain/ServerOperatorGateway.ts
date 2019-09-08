import Player from '../model/Player';

export default interface ServerOperatorGateway {
    fetchPlayerBy(name: string): Promise<Player>
}