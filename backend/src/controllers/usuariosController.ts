import { Request, Response } from 'express';
import pool from '../database';

//Constantes para la fase de encriptacion y token
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = "pass";

class UsuariosController {
    index(req: Request, res: Response) {
        res.json({
            'message': 'Estas en usuarios'
        });
    }

    public async create(req: Request, res: Response) {
        const resultado = await pool.query('INSERT INTO USUARIOS SET ?', [req.body]);      
        res.json(resultado);
    }

    public async read(req: Request, res: Response) {
        const usuarios = await pool.query('SELECT * FROM USUARIOS', [req.params]);
        res.json(usuarios);
    }

    public async update(req: Request, res: Response) {
        const resultado = await pool.query('UPDATE USUARIOS SET ? WHERE id=? ', [req.params.id]);
        res.json(resultado);
    }

    public async delete(req: Request, res: Response) {
        const resultado = await pool.query('DELETE FROM USUARIOS WHERE id=? ', [req.params.id]);
        res.json(resultado);
    }

    public async readOne(req: Request, res: Response) {
        const usuarios = await pool.query('SELECT * FROM USUARIOS WHERE id=?', [req.params.id]);
        res.json(usuarios);
    }

    public async readLogin(req: Request, res: Response) {
        const copiaUsuario = {
            nombre: req.body.nombre,
            password: req.body.password
        };
        const usuarios = await pool.query('SELECT * FROM USUARIOS WHERE nombre = ? AND password = ?', [req.body.nombre, req.body.foto]);
        console.log(usuarios.length);
        if (usuarios.length == 0) {
            res.json({ 'message': 'Error al logearse' });
        } else {
            const expiresIn = 24 * 60 * 60;
            const accessToken = jwt.sign({ id: copiaUsuario.nombre }, SECRET_KEY, {expiresIn:expiresIn});
            console.log(accessToken);
            res.json(accessToken);
        }
    }

}
export const usuariosController = new UsuariosController;