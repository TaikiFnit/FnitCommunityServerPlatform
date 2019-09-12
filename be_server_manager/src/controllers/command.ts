import { Request, Response } from 'express';
import ServerOperatorInterface from "../domain/ServerOperatorInterface";
import ServerOperator from "../domain/ServerOperator";
import ServerOperatorMapper from "../database/ServerOperatorMapper";
import DiscordAuthor from "../entities/DiscordAuthor";

export const discordCommand = async (request: Request, response: Response) => {
    const model: ServerOperatorInterface = new ServerOperator(new ServerOperatorMapper());
    const body = request.body;

    const directive:string = body.directive;
    const author: DiscordAuthor = body.author;

    if(!isAuthor(author)) {
        throw new Error('Invalid author params');
    }

    let directive_array:Array<string> = directive.split(' ');
    const [command, ...targets] = directive_array;

    switch (command) {
        case 'join':
            return;
        case 'ban':
            const targetPlayer: string = targets[0];

            if (typeof targetPlayer === 'string') {
                // const result = await entities.addWhitelist(targetPlayer);
            }
            return;
        case 'deban':
            return;
        case 'restore':
            return;
        default:
            return;
    }

    // directiveを分解し, コマンドを抽出
    // 抽出されたコマンドによって, 対応するDomainを呼び出す
    // domainのインターフェースは, directiveのarguments, DiscordAuthor
    // domain内では, argumentsを条件としてdirectiveを実行. トランザクションをDiscord AuthorとともにDBに保存
    // トランザクション内で持つauthor情報はidのみとし, てきぎ, name等はDiscordAuthor Collectionに保存する (idをuidとする)

    return response.send(body.directive);
};

function isAuthor(author: any): author is DiscordAuthor {
    return (
        typeof author.id === 'string' &&
        typeof author.username === 'string' &&
        typeof author.discriminator === 'string' &&
        typeof author.avatar === 'string'
    );
}