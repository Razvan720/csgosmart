import { Request, Response } from 'express';
import pool from '../database';


class UsuariosController {
    index(req: Request, res: Response) {
        res.json({
            'message': 'Estas en usuarios'
        });
    }

    public async create(req: Request, res: Response) {
        const sql = await pool.query('INSERT INTO USUARIOS SET ?', [req.body]);      
    }

    public async read(req: Request, res: Response) {
        const usuarios = await pool.query('SELECT * FROM USUARIOS', [req.params]);
        res.json(usuarios);
    }

    public async update(req: Request, res: Response) {
        await pool.query('UPDATE USUARIOS SET ? WHERE id=? ', [req.params.id]);
    }

    public async delete(req: Request, res: Response) {
        await pool.query('DELETE FROM USUARIOS WHERE id=? ', [req.params.id]);
    }

    public async readOne(req: Request, res: Response) {
        const usuarios = await pool.query('SELECT * FROM USUARIOS WHERE id=?', [req.params.id]);
        res.json(usuarios);
    }

}
export const usuariosController = new UsuariosController;