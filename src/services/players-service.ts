import { PlayerModel } from "../models/player-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as httpResponse from "../utils/http-helper"

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers();
    let response = null

    if (data) {
        response = await httpResponse.ok(data);
    } else {
        response = await httpResponse.noContent();
    }

    return response
};

export const getPlayerServiceById = async (id: number) => {
    const data = await PlayerRepository.findPlayerById(id);
    let response = null;

    if (data) {
        response = await httpResponse.ok(data);
    } else {
        response = await httpResponse.noContent();
    }

    return response;

}

export const createPlayerService = async (player: PlayerModel) => {

    let response = null;

    if (Object.keys(player).length !== 0) {
        await PlayerRepository.insertPlayer(player);
        response = await httpResponse.created();
    } else {
        response = await httpResponse.badRequest();
    }
    return response;
}

export const deletePlayerService = async (id: number) => {
    let response = null;
    const isDeleated: boolean = await PlayerRepository.deleteOnePlayer(id);

    if (isDeleated) {
        response = await httpResponse.ok({ message: "delete" });
    } else {
        response = await httpResponse.badRequest();
    }


    return response;
}

export const putPlayerService = async (id: number, bodyValue: PlayerModel) => {
    const data: any = await PlayerRepository.putPlayer(id, bodyValue);
    let response = null;

    if (Object.keys(data).length === 0) {
        response = await httpResponse.badRequest();
    } else {
        response = await httpResponse.ok(data)
    }
    return response;

}