import { Request, Response } from 'express';

export const postLog = async (request: Request, response: Response) => {
    const line = request.body.line;
    console.log('line');
    console.log(line);

    if (typeof line !== 'string') {
        response.status(400);
        return response.send('invalid params line');
    }

    // const connected = '[2019-09-17 14:09:45 INFO] Player connected: kotlin1997, xuid: 2535473624588400';
    const lineArray: Array<string> = line.split(' ');
    const playerName: string = lineArray[5].slice(0, -1);
    const xuid: string = lineArray[7];

    console.log(playerName);
    console.log(xuid);

    return response.send({playerName, xuid});
};