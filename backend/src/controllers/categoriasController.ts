import { Request, Response } from 'express';
import pool from '../database';

class CategoriasController {
    index(req: Request, res: Response) {
        res.json({
            'message': 'Estamos en categorias'
        });
    }

    public async read(req: Request, res: Response) {
        const categorias = await pool.query('SELECT * FROM CATEGORIAS', [req.body]);
        res.json(categorias);
    }

    public async readOne(req: Request, res: Response) {
        const categorias = await pool.query('SELECT * FROM CATEGORIAS WHERE id=?', [req.params.id]);
        res.json(categorias);
    }


}
export const categoriasController = new CategoriasController;