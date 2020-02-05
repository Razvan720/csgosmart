import { Router } from 'express';
import { cajasController } from '../controllers/cajasController';


class CajasRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/',cajasController.create);
        this.router.get('/',cajasController.read);
        this.router.put('/:id',cajasController.update);
        this.router.delete('/:id', cajasController.delete);
        this.router.get('/:id', cajasController.readOne); 
    }
}

const cajasRoutes = new CajasRoutes();
export default cajasRoutes.router;


