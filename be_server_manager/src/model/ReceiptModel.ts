import Receipt from '../entities/Receipt';
import ReceiptModelGateway from './ReceiptModelGateway';

class ReceiptModel implements Receipt {
    uid: string;
    number: string;
    activated?: boolean;
    createdAt: number;

    receiptModelGateway: ReceiptModelGateway;

    constructor(receipt: any, receiptModelGateway: ReceiptModelGateway) {
        if(ReceiptModel.isReceipt(receipt)) {
            this.uid = receipt.uid;
            this.number = receipt.number;
            this.activated = receipt.activated;
            this.createdAt = receipt.createdAt;
        } else {
            throw new Error('invalid type Receipt');
        }

        this.receiptModelGateway = receiptModelGateway;
    }

    get receipt(): Receipt {
        return {
            uid: this.uid,
            number: this.number,
            activated: this.activated,
            createdAt: this.createdAt
        };
    }

    public async activate(): Promise<boolean> {
        if(this.activated === true) {
            throw new Error('This receipt had been activated.');
        }

        const activatedRceipt = await this.receiptModelGateway.activateReceipt(this.receipt);

        if(activatedRceipt.activated === true) {
            return true;
        }

        throw new Error('failed to activate');
    }

    public static isReceipt(receipt: any): receipt is Receipt {
        return (
            'uid' in receipt &&
            'number' in receipt &&
            'createdAt' in receipt
        );
    }
}

export default ReceiptModel;