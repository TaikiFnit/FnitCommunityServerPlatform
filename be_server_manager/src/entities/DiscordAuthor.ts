import { Timestamp } from '../database/FnitCommunityDatabase';

interface DiscordAuthor {
    id: string;
    username: string;
    discriminator: string;
    avatar: string;
    uid?: string;
    createdAt?: Timestamp;
}

export default DiscordAuthor;