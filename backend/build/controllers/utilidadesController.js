"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class UtilidadesController {
    index(req, res) {
        res.json({
            'message': 'Estamos en utilidades'
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = yield database_1.default.query('INSERT INTO UTILIDADES SET ?', [req.body]);
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const utilidades = yield database_1.default.query('SELECT * FROM UTILIDADES', [req.body]);
            res.json(utilidades);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE UTILIDADES SET ? WHERE id=? ', [req.params.id]);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM UTILIDADES WHERE id=? ', [req.params.id]);
        });
    }
    readOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const utilidades = yield database_1.default.query('SELECT * FROM UTILIDADES WHERE id=?', [req.params.id]);
            res.json(utilidades);
        });
    }
}
exports.utilidadesController = new UtilidadesController;
