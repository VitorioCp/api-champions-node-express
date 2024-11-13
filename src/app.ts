import express from "express";
import { getPlayer } from "./controllers/players-controller.ts";
import router from "./routes";


function createApp() {
    const app = express();

    app.use(express.json());

    app.use("/api", router)


    return app
}

export default createApp;