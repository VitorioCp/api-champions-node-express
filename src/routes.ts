import { Router } from "express";
import * as PlayerController from "./controllers/players-controller";
import * as clubsController from "./controllers/clubs-controller";
const router = Router();

//PLayers
router.get("/players", PlayerController.getPlayer);
router.post("/players", PlayerController.postPlayer);
router.put("/players/:id", PlayerController.putPlayer);
router.delete("/players/:id", PlayerController.deletePlayer);
router.get("/players/:id", PlayerController.getPlayerById);

//Clubs
router.get("/clubs",clubsController.getClubs);

export default router