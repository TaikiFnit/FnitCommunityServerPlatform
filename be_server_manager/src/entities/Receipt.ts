import { FieldValue } from '../database/FnitCommunityDatabase';

interface Receipt {
    uid: string;
    number: string;
    activated?: boolean;
    createdAt: FieldValue;
}

export default Receipt;