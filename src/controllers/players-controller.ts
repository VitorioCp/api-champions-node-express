import { Request, Response } from "express";
import { getPlayerServiceById, getPlayerService } from "../services/players-service";


export const getPlayer = async(req: Request, res: Response) => {

    const HttpResponse = await getPlayerService();
    

    res.status(HttpResponse.statusCode).json(HttpResponse.body)
    
}

export const getPlayerById = async(req: Request, res: Response) =>{
    const id = parseInt(req.params.id);
    const HttpResponse = await getPlayerServiceById(id);

    res.status(HttpResponse.statusCode).json(HttpResponse.body)

}