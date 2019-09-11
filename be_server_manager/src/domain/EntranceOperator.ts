import EntranceOperatorInterface from './EntranceOperatorInterface';
import EntranceOperatorGateway from './EntranceOperatorGateway';
import Receipt from "../model/Receipt";

class EntranceOperator implements EntranceOperatorInterface {
    private entranceOperatorGateway: EntranceOperatorGateway;

    constructor(entranceOperatorGateway: EntranceOperatorGateway) {
        this.entranceOperatorGateway = entranceOperatorGateway;
    }

    async is_player_authenticated(playerName: string): Promise<boolean> {
        return false;
    }

    async publish_receipt_number(playerName: string, ip: string): Promise<string> {
        const receipt_exists: Receipt | null = await this.entranceOperatorGateway.fetch_receipt_by(playerName).catch(() => {
            return null;
        });

        if (receipt_exists !== null) {
            return (receipt_exists as Receipt).number;
        }

        const number: string = await this.generateUniqueReceiptNumber();
        const receipt_published: Receipt = await this.entranceOperatorGateway.publish_receipt_number(playerName, ip, number);

        return receipt_published.number;
    }

    private async generateUniqueReceiptNumber(): Promise<string> {
        const number: string = EntranceOperator.generate4DigitsStringNumber();
        const is_duplicated: boolean = await this.entranceOperatorGateway.is_number_duplicated(number);

        if(is_duplicated === false) {
            return number;
        }

        return (await this.generateUniqueReceiptNumber());
    }

    private static generate4DigitsStringNumber(): string {
        const number = EntranceOperator.getRandomInt(9999);
        return `000${number}`.slice(-4);
    }

    private static getRandomInt(max: number) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}

export default EntranceOperator;