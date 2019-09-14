import Receipt from '../entities/Receipt';

interface ReceiptModelGateway {
    activateReceipt(receipt: Receipt): Promise<Receipt>;
}

export default ReceiptModelGateway;