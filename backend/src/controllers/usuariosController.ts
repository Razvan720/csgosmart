import { Request, Response } from 'express';
import pool from '../database';

//Constantes para la fase de encriptacion y token
const jwt = require('jsonwebtoken');
const SECRET_KEY = "passwd";
const bcrypt = require('bcryptjs');

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

    public async updatePass(req: Request, res: Response) {
        const resultado = {'error': 'Error al actualizar'};
        res.json(resultado);
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
            usuario: req.body.usuario,
            password: req.body.password
        };

        const usuarios = await pool.query('SELECT * FROM USUARIOS', [req.params]);
        if (usuarios.length == 0) {
            const hash = bcrypt.hashSync(copiaUsuario.password, 10);
            await pool.query('INSERT INTO USUARIOS (usuario, password) VALUES (?, ?)', [copiaUsuario.usuario, hash]);
            res.json({
                'code': '1',
                'message': 'No hay usuarios registrados',
            });
            
        } 

        const usuario = await pool.query('SELECT * FROM USUARIOS WHERE usuario=?', [copiaUsuario.usuario]);
        if (usuario.length == 0){
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
    }
}
export const usuariosController = new UsuariosController;