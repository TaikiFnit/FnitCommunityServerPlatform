import { Timestamp } from '../database/FnitCommunityDatabase';

interface Receipt {
    uid: string;
    number: string;
    activated?: boolean;
    createdAt: Timestamp;
}

export default Receipt;