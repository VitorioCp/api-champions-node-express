import { Request, Response } from "express";
import * as service from "../services/players-service";
import { badRequest } from "../utils/http-helper";
import { PlayerModel } from "../models/player-model";


export const getPlayer = async (req: Request, res: Response) => {

    const httpResponse = await service.getPlayerService();


    res.status(httpResponse.statusCode).json(httpResponse.body)

}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await service.getPlayerServiceById(id);

    res.status(httpResponse.statusCode).json(httpResponse.body)

}

export const postPlayer = async (req: Request, res: Response) => {
    const bodyValue = req.body;
    const httpResponse = await service.createPlayerService(bodyValue);

    if (httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body)
    } else {
        const response = await badRequest()
        res.status(response.statusCode)
    }
}

export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await service.deletePlayerService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body)

}

export const putPlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const bodyValue: PlayerModel = req.body;

    const httpResponse = await service.putPlayerService(id, bodyValue);

    res.status(httpResponse.statusCode).json(httpResponse.body)


}