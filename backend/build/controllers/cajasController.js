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
class CajasController {
    index(req, res) {
        res.json({
            'message': 'Estamos en cajas'
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield database_1.default.query('INSERT INTO CAJAS SET ?', [req.body]);
            res.json(resultado);
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cajas = yield database_1.default.query('SELECT * FROM CAJAS', [req.body]);
            res.json(cajas);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield database_1.default.query('UPDATE CAJAS SET ? WHERE id=? ', [req.params.id]);
            res.json(resultado);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield database_1.default.query('DELETE FROM CAJAS WHERE id=? ', [req.params.id]);
            res.json(resultado);
        });
    }
    readOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cajas = yield database_1.default.query('SELECT * FROM CAJAS WHERE id=?', [req.params.id]);
            res.json(cajas);
        });
    }
}
exports.cajasController = new CajasController;
