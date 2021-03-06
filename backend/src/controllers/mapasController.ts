import { Request, Response } from 'express';
import pool from '../database';

class MapasController {
    index(req: Request, res: Response) {
        res.json({
            'message': 'Estamos en mapas'
        });
    }

    public async create(req: Request, res: Response) {
        const resultado = await pool.query('INSERT INTO MAPAS SET ?', [req.body]);
        res.json(resultado);
    }

    
    public async read(req: Request, res: Response) {
        const mapas = await pool.query('SELECT * FROM MAPAS', [req.body]);
        res.json(mapas);
    }

    public async update(req: Request, res: Response) {
        const resultado = await pool.query('UPDATE MAPAS SET ? WHERE id=? ', [req.params.id]);
        res.json(resultado);
    }

    public async delete(req: Request, res: Response) {
        const resultado = await pool.query('DELETE FROM MAPAS WHERE id=? ', [req.params.id]);
        res.json(resultado);
    }

    public async readOne(req: Request, res: Response) {
        const mapas = await pool.query('SELECT * FROM MAPAS WHERE id=?', [req.params.id]);
        res.json(mapas);
    }


}
export const mapasController = new MapasController;