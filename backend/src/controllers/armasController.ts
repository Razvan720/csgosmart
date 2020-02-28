import { Request, Response } from 'express';
import pool from '../database';

class ArmasController {
    index(req: Request, res: Response) {
        res.json({
            'message': 'Estamos en updates'
        });
    }

    public async create(req: Request, res: Response) {
        const resultado = await pool.query('INSERT INTO ARMAS SET ?', [req.body]);
        res.json(resultado);
    }

    public async read(req: Request, res: Response) {
        const armas = await pool.query('SELECT * FROM ARMAS', [req.body]);
        res.json(armas);
    }

    public async update(req: Request, res: Response) {
        const resultado = await pool.query('UPDATE ARMAS SET ? WHERE id=? ', [req.params.id]);
        res.json(resultado);
    }

    public async delete(req: Request, res: Response) {
        const resultado = await pool.query('DELETE FROM ARMAS WHERE id=? ', [req.params.id]);
        res.json(resultado);
    }

    public async readOne(req: Request, res: Response) {
        const armas = await pool.query('SELECT * FROM ARMAS WHERE id=?', [req.params.id]);
        res.json(armas);
    }

    public async readByCategory(req: Request, res: Response) {
        const armas = await pool.query('SELECT * FROM ARMAS WHERE categorias_id=?', [req.params.id]);
        res.json(armas);
    }


}
export const armasController = new ArmasController;
