"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cajasController_1 = require("../controllers/cajasController");
class CajasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', cajasController_1.cajasController.create);
        this.router.get('/', cajasController_1.cajasController.read);
        this.router.put('/:id', cajasController_1.cajasController.update);
        this.router.delete('/:id', cajasController_1.cajasController.delete);
        this.router.get('/:id', cajasController_1.cajasController.readOne);
    }
}
const cajasRoutes = new CajasRoutes();
exports.default = cajasRoutes.router;
