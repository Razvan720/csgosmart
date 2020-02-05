"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const skinsController_1 = require("../controllers/skinsController");
class SkinsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', skinsController_1.skinsController.create);
        this.router.get('/', skinsController_1.skinsController.read);
        this.router.put('/:id', skinsController_1.skinsController.update);
        this.router.delete('/:id', skinsController_1.skinsController.delete);
        this.router.get('/:id', skinsController_1.skinsController.readOne);
    }
}
const skinsRoutes = new SkinsRoutes();
exports.default = skinsRoutes.router;
