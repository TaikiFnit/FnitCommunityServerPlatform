import { FieldValue } from '../database/FnitCommunityDatabase';

interface DiscordAuthor {
    id: string;
    username: string;
    discriminator: string;
    avatar: string;
    uid?: string;
    createdAt?: FieldValue;
}

export default DiscordAuthor;