import { Request, Response } from 'express';
import pool from '../database';

class TipogranadasController {
    index(req: Request, res: Response) {
        res.json({
            'message': 'Estamos en tipos granada'
        });
    }

    public async read(req: Request, res: Response) {
        const tipogranadas = await pool.query('SELECT * FROM TIPOGRANADAS', [req.body]);
        res.json(tipogranadas);
    }

    public async readOne(req: Request, res: Response) {
        const tipogranadas = await pool.query('SELECT * FROM TIPOGRANADAS WHERE id=?', [req.params.id]);
        res.json(tipogranadas);
    }


}
export const tipogranadasController = new TipogranadasController;