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
class MapasController {
    index(req, res) {
        res.json({
            'message': 'Estamos en mapas'
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield database_1.default.query('INSERT INTO MAPAS SET ?', [req.body]);
            res.json(resultado);
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const mapas = yield database_1.default.query('SELECT * FROM MAPAS', [req.body]);
            res.json(mapas);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield database_1.default.query('UPDATE MAPAS SET ? WHERE id=? ', [req.params.id]);
            res.json(resultado);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield database_1.default.query('DELETE FROM MAPAS WHERE id=? ', [req.params.id]);
            res.json(resultado);
        });
    }
    readOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const mapas = yield database_1.default.query('SELECT * FROM MAPAS WHERE id=?', [req.params.id]);
            res.json(mapas);
        });
    }
}
exports.mapasController = new MapasController;
