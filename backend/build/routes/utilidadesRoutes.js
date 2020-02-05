"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const utilidadesController_1 = require("../controllers/utilidadesController");
class UtilidadesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', utilidadesController_1.utilidadesController.create);
        this.router.get('/', utilidadesController_1.utilidadesController.read);
        this.router.put('/:id', utilidadesController_1.utilidadesController.update);
        this.router.delete('/:id', utilidadesController_1.utilidadesController.delete);
        this.router.get('/:id', utilidadesController_1.utilidadesController.readOne);
    }
}
const utilidadesRoutes = new UtilidadesRoutes();
exports.default = utilidadesRoutes.router;
