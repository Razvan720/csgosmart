"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mapasController_1 = require("../controllers/mapasController");
class MapasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', mapasController_1.mapasController.create);
        this.router.get('/', mapasController_1.mapasController.read);
        this.router.put('/:id', mapasController_1.mapasController.update);
        this.router.delete('/:id', mapasController_1.mapasController.delete);
        this.router.get('/:id', mapasController_1.mapasController.readOne);
    }
}
const mapasRoutes = new MapasRoutes();
exports.default = mapasRoutes.router;
