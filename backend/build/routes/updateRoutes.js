"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const updatesController_1 = require("../controllers/updatesController");
class UpdatesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', updatesController_1.updatesController.create);
        this.router.get('/', updatesController_1.updatesController.read);
        this.router.put('/:id', updatesController_1.updatesController.update);
        this.router.delete('/:id', updatesController_1.updatesController.delete);
        this.router.get('/:id', updatesController_1.updatesController.readOne);
    }
}
const updatesRoutes = new UpdatesRoutes();
exports.default = updatesRoutes.router;
