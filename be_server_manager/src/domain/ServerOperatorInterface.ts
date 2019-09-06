export interface ServerOperatorInterface {
    addWhitelist(playerName: string): boolean;
    removeWhitelist(playerName: string): boolean;
}