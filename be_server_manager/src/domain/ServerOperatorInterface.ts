export default interface ServerOperatorInterface {
    addWhitelist(playerName: string): Promise<boolean>;
    removeWhitelist(playerName: string): Promise<boolean>;
}