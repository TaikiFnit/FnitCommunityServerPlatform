interface ServerOperatorInterface {
    addWhitelist(playerName: string): Promise<boolean>;
    removeWhitelist(playerName: string): Promise<boolean>;
}

export default ServerOperatorInterface;