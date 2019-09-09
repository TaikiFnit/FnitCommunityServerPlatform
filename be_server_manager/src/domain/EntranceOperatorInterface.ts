interface EntranceOperatorInterface {
    is_player_authenticated(playerName: string): Promise<boolean>;
    publish_receipt_number(playerName: string, ip: string): Promise<string>;
}

export default EntranceOperatorInterface;