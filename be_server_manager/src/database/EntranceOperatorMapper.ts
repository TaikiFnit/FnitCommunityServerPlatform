import EntranceOperatorGateway from '../domain/EntranceOperatorGateway';
import FnitCommunityDatabase from './FnitCommunityDatabase';
import Receipt from '../model/Receipt';

export default class EntranceOperatorMapper implements  EntranceOperatorGateway {
    async fetch_receipt_by(name: string): Promise<Receipt> {
        const doc = await FnitCommunityDatabase.collection('receipt').doc(name).get();

        if (doc.exists) {
            const data = doc.data();
            const receipt: Receipt = {
                name: data.name,
                ip: data.ip,
                number: data.number,
                created_at: data.created_at
            };

            return receipt;
        }

        throw new Error('Not found')
    }

    async publish_receipt_number(name: string, ip: string, number: string): Promise<Receipt> {
        const receipt: Receipt = {
            name,
            ip,
            number,
            created_at: new Date().getTime()
        };

        await FnitCommunityDatabase.collection('receipt').doc(name).set(receipt);

        return receipt;
    }

    async is_number_duplicated(number: string): Promise<boolean> {
        let receiptRef = FnitCommunityDatabase.collection('receipt');
        const snapshot = await receiptRef.where('number', '==', number).get();

        return !snapshot.empty;
    }
}
