import { Router } from 'express';
import { categoriasController } from '../controllers/categoriasController';


class CategoriasRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/',categoriasController.read);
        this.router.get('/:id', categoriasController.readOne); 
    }
}

const categoriasRoutes = new CategoriasRoutes();
export default categoriasRoutes.router;


