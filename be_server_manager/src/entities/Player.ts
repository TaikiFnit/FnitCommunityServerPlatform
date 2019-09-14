import { FieldValue } from '../database/FnitCommunityDatabase';

interface Player {
    name: string;
    uid: string;
    createdAt: FieldValue;
}

export default Player;