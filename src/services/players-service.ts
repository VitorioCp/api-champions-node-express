import { noContent, ok } from "../utils/http-helper"

export const getPlayerService = async() => {
    const data = {player : "Vitório"};
    let response = await ok(data);

    if(data){
        response = await ok(data);
    } else {
        response = await noContent();
    }

    return response
}