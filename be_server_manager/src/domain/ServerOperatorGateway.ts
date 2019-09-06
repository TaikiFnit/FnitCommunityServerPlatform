import Player from '../model/Player';

export default interface ServerOperatorGateway {
    fetchUserBy(name: string): Promise<Player>
}