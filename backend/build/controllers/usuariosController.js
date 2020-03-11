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
const SECRET_KEY = "passwd";
const bcrypt = require('bcryptjs');
class UsuariosController {
    index(req, res) {
        res.json({
            'message': 'Estas en usuarios'
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield database_1.default.query('INSERT INTO USUARIOS SET ?', [req.body]);
            res.json(resultado);
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield database_1.default.query('SELECT * FROM USUARIOS', [req.params]);
            res.json(usuarios);
        });
    }
    pedro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield database_1.default.query('SELECT * FROM USUARIOS');
            res.json(usuarios);
            /*
            console.log('llega');
            const usuario = await pool.query('SELECT * FROM USUARIOS WHERE usuario=?', [req.body.upass_usuario]);
            console.log(usuario);
            if (usuario.length == 0){
                res.json({
                    'code': '1',
                    'message': "El usuario no se encuentra en la base de datos"
                });
            }
            
            if (bcrypt.compareSync(req.body.upass_password, usuario[0].password)) {
                const resultado = await pool.query('UPDATE USUARIOS SET password = ? WHERE id= ? ', [req.body.upass_new_password,usuario.id]);
            }
            */
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield database_1.default.query('DELETE FROM USUARIOS WHERE id=? ', [req.params.id]);
            res.json(resultado);
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
                usuario: req.body.usuario,
                password: req.body.password
            };
            const usuarios = yield database_1.default.query('SELECT * FROM USUARIOS', [req.params]);
            if (usuarios.length == 0) {
                const hash = bcrypt.hashSync(copiaUsuario.password, 10);
                yield database_1.default.query('INSERT INTO USUARIOS (usuario, password) VALUES (?, ?)', [copiaUsuario.usuario, hash]);
                res.json({
                    'code': '1',
                    'message': 'No hay usuarios registrados',
                });
            }
            const usuario = yield database_1.default.query('SELECT * FROM USUARIOS WHERE usuario=?', [copiaUsuario.usuario]);
            if (usuario.length == 0) {
                res.json({
                    'code': '2',
                    'message': "El usuario no se encuentra en la base de datos"
                });
            }
            if (bcrypt.compareSync(copiaUsuario.password, usuario[0].password)) {
                const expiresIn = 24 * 60 * 60;
                const accessToken = jwt.sign({ id: copiaUsuario.usuario }, SECRET_KEY, { expiresIn: expiresIn });
                res.json({
                    'code': '0',
                    'message': 'Login correcto',
                    'token': accessToken
                });
            }
            res.json({
                'code': '3',
                'message': 'Contraseña incorrecta',
            });
        });
    }
}
exports.usuariosController = new UsuariosController;
