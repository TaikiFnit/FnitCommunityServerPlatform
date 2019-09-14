interface DiscordAuthor {
    id: string;
    username: string;
    discriminator: string;
    avatar: string;
    uid?: string;
}

export default DiscordAuthor;