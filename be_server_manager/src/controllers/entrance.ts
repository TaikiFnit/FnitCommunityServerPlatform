import { Request, Response } from "express";
import EntranceOperatorInterface from '../domain/EntranceOperatorInterface';
import EntranceOperator from '../domain/EntranceOperator';

const entranceOperator: EntranceOperatorInterface = new EntranceOperator();

export const is_player_authenticated = async (request: Request, response: Response) => {
    const name = decodeURIComponent(request.query.name);
    return response.sendStatus(200);
};

export const publish_receipt_number = async (request: Request, response: Response) => {
    const name = decodeURIComponent(request.query.name);
    const ip = decodeURIComponent(request.query.ip);



    return response.sendStatus(200);
};
