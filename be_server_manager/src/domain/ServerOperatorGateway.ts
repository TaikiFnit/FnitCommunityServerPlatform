import Player from '../model/Player';

interface ServerOperatorGateway {
    fetchPlayerBy(name: string): Promise<Player>;
}

export default ServerOperatorGateway;
