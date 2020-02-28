import { Request, Response } from 'express';
import pool from '../database';

class UtilidadesController {
    index(req: Request, res: Response) {
        res.json({
            'message': 'Estamos en utilidades'
        });
    }

    public async create(req: Request, res: Response) {
        const resultado = await pool.query('INSERT INTO UTILIDADES SET ?', [req.body]);
        res.json(resultado);
    }

    public async read(req: Request, res: Response) {
        const utilidades = await pool.query('SELECT * FROM UTILIDADES', [req.body]);
        res.json(utilidades);
    }

    public async update(req: Request, res: Response) {
        const resultado = await pool.query('UPDATE UTILIDADES SET ? WHERE id=? ', [req.params.id]);
        res.json(resultado);
    }

    public async delete(req: Request, res: Response) {
        const resultado = await pool.query('DELETE FROM UTILIDADES WHERE id=? ', [req.params.id]);
        res.json(resultado);
    }

    public async readOne(req: Request, res: Response) {
        const utilidades = await pool.query('SELECT * FROM UTILIDADES WHERE id=?', [req.params.id]);
        res.json(utilidades);
    }

}
export const utilidadesController = new UtilidadesController;