import { Request, Response } from 'express';

export const postLog = async (request: Request, response: Response) => {
    const line = request.params.line;

    if (typeof line === 'string') {
        console.log(line);
    }

    return response.sendStatus(200);
};