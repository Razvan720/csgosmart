"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipogranadasController_1 = require("../controllers/tipogranadasController");
class TipogranadasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', tipogranadasController_1.tipogranadasController.read);
        this.router.get('/:id', tipogranadasController_1.tipogranadasController.readOne);
    }
}
const tipogranadasRoutes = new TipogranadasRoutes();
exports.default = tipogranadasRoutes.router;
