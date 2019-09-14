import DiscordAuthor from '../entities/DiscordAuthor';
import { Timestamp } from '../database/FnitCommunityDatabase';

class DiscordAuthorModel implements DiscordAuthor {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    uid?: string;
    createdAt?: Timestamp;

    constructor(author: any) {
        if(DiscordAuthorModel.isDiscordAuthor(author)) {
            this.id = author.id;
            this.username = author.username;
            this.avatar = author.avatar;
            this.discriminator = author.discriminator;
            this.uid = author.uid;
            this.createdAt = author.createdAt;
            return;
        }

        throw new Error('invalid params for Discord Author');
    }

    public static isDiscordAuthor(author: any): author is DiscordAuthor {
        return (
            typeof author.id === 'string' &&
            typeof author.username === 'string' &&
            typeof author.discriminator === 'string' &&
            typeof author.avatar === 'string'
        );
    }
}
export default DiscordAuthorModel;