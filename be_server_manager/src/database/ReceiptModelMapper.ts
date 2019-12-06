import ReceiptModelGateway from '../model/ReceiptModelGateway';
import ReceiptModel from '../model/ReceiptModel';
import Receipt from '../entities/Receipt';
import DB from './FnitCommunityDatabase';

class ReceiptModelMapper implements ReceiptModelGateway {
    async activateReceipt(receipt: Receipt): Promise<Receipt> {
        const docRef = DB.collection('receipts').doc(receipt.uid);
        await docRef.set({activated: true}, {merge: true});

        const doc = await docRef.get();
        const newReceipt = doc.data();

        if(ReceiptModel.isReceipt(newReceipt)) {
            return newReceipt;
        }

        throw new Error('failed to activate');
    }

    public static isReceipt(receipt: any): receipt is Receipt {
        return (
            typeof receipt.uid === 'string'
        );
    }
}

export default ReceiptModelMapper;