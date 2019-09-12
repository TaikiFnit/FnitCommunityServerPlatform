import { Request, Response } from 'express';

export const discordCommand = async (request: Request, response: Response) => {
    const body = request.body;
    console.log('body');
    console.log(body);

    return response.sendStatus(200);
};