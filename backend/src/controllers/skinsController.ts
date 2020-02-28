import { Request, Response } from 'express';
import pool from '../database';

class SkinsController {
    index(req: Request, res: Response) {
        res.json({
            'message': 'Estamos en skins'
        });
    }

    public async create(req: Request, res: Response) {
        const resultado = await pool.query('INSERT INTO SKINS SET ?', [req.body]);
        res.json(resultado);
    }

    public async read(req: Request, res: Response) {
        const skins = await pool.query('SELECT * FROM SKINS', [req.body]);
        res.json(skins);
    }

    public async update(req: Request, res: Response) {
        const resultado = await pool.query('UPDATE SKINS SET ? WHERE id=? ', [req.params.id]);
        res.json(resultado);
    }

    public async delete(req: Request, res: Response) {
        const resultado = await pool.query('DELETE FROM SKINS WHERE id=? ', [req.params.id]);
    }

    public async readOne(req: Request, res: Response) {
        const skins = await pool.query('SELECT * FROM SKINS WHERE id=?', [req.params.id]);
        res.json(skins);
    }


}
export const skinsController = new SkinsController;