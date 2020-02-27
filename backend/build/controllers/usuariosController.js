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
//Constantes para la fase de encriptacion y token
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = "pass";
class UsuariosController {
    index(req, res) {
        res.json({
            'message': 'Estas en usuarios'
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = yield database_1.default.query('INSERT INTO USUARIOS SET ?', [req.body]);
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield database_1.default.query('SELECT * FROM USUARIOS', [req.params]);
            res.json(usuarios);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE USUARIOS SET ? WHERE id=? ', [req.params.id]);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM USUARIOS WHERE id=? ', [req.params.id]);
        });
    }
    readOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield database_1.default.query('SELECT * FROM USUARIOS WHERE id=?', [req.params.id]);
            res.json(usuarios);
        });
    }
    readLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const copiaUsuario = {
                nombre: req.body.nombre,
                password: req.body.password
            };
            const usuarios = yield database_1.default.query('SELECT * FROM USUARIOS WHERE nombre = ? AND password = ?', [req.body.nombre, req.body.foto]);
            console.log(usuarios.length);
            if (usuarios.length == 0) {
                res.json({ 'message': 'Error al logearse' });
            }
            else {
                const expiresIn = 24 * 60 * 60;
                const accessToken = jwt.sign({ id: copiaUsuario.nombre }, SECRET_KEY, { expiresIn: expiresIn });
                console.log(accessToken);
                res.json(accessToken);
            }
        });
    }
}
exports.usuariosController = new UsuariosController;
