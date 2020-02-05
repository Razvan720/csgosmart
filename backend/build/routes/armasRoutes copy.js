"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const armasController_1 = require("../controllers/armasController");
class ArmasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', armasController_1.armasController.create);
        this.router.get('/', armasController_1.armasController.read);
        this.router.put('/:id', armasController_1.armasController.update);
        this.router.delete('/:id', armasController_1.armasController.delete);
        this.router.get('/:id', armasController_1.armasController.readOne);
    }
}
const armasRoutes = new ArmasRoutes();
exports.default = armasRoutes.router;
