import { Request, Response } from 'express';
import pool from '../database';

class UpdatesController {
    index(req: Request, res: Response) {
        res.json({
            'message': 'Estamos en updates'
        });
    }

    public async create(req: Request, res: Response) {
        const resultado = await pool.query('INSERT INTO UPDATES SET ?', [req.body]);
        res.json(resultado);
               
    }

    public async read(req: Request, res: Response) {
        const usuarios = await pool.query('SELECT * FROM UPDATES', [req.body]);
        res.json(usuarios);
    }

    public async update(req: Request, res: Response) {
        console.log("Entra");
        const resultado = await pool.query('UPDATE UPDATES SET ? WHERE id=? ', [req.params.id]);
        
        res.json(resultado);
    }

    public async delete(req: Request, res: Response) {
        const resultado = await pool.query('DELETE FROM UPDATES WHERE id=? ', [req.params.id]);
        res.json(resultado);
    }

    public async readOne(req: Request, res: Response) {
        const usuarios = await pool.query('SELECT * FROM UPDATES WHERE id=?', [req.params.id]);
        res.json(usuarios);
    }

    
}
export const updatesController = new UpdatesController;