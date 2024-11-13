import { PlayerModel } from "../models/player-model";

const database: PlayerModel[] = [
    {
        id: 1,
        name: "Vitorio",
        club: "Botafogo",
        nationality: "Brasil",
        position: "Zc",
       
    },
    {
        id: 2,
        name: "Leticia",
        club: "Botafogo",
        nationality: "Brasil",
        position: "Zc",
       
    },
    
    
]

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id);

}

export const insertPlayer = async(player:PlayerModel) => {
    database.push(player);
    console.log(player)
}

export const deleteOnePlayer = async(id:number) => {
    const index = database.findIndex(p => p.id === id);
    if(index !== -1){
        database.splice(index, 1);
    }
    
}