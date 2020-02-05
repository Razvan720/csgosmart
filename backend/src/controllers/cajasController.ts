import { Request, Response } from 'express';
import pool from '../database';

class CajasController {
    index(req: Request, res: Response) {
        res.json({
            'message': 'Estamos en cajas'
        });
    }

    public async create(req: Request, res: Response) {
        const sql = await pool.query('INSERT INTO CAJAS SET ?', [req.body]);
    }

    public async read(req: Request, res: Response) {
        const cajas = await pool.query('SELECT * FROM CAJAS', [req.body]);
        res.json(cajas);
    }

    public async update(req: Request, res: Response) {
        await pool.query('UPDATE CAJAS SET ? WHERE id=? ', [req.params.id]);
    }

    public async delete(req: Request, res: Response) {
        await pool.query('DELETE FROM CAJAS WHERE id=? ', [req.params.id]);
    }

    public async readOne(req: Request, res: Response) {

        const cajas = await pool.query('SELECT * FROM CAJAS WHERE id=?', [req.params.id]);
        res.json(cajas);
    }


}
export const cajasController = new CajasController;