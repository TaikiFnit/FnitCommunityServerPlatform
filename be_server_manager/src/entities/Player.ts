import { Timestamp } from '../database/FnitCommunityDatabase';

interface Player {
    name: string;
    uid: string;
    createdAt: Timestamp;
}

export default Player;