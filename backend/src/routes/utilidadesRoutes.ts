import { Router } from 'express';
import { utilidadesController } from '../controllers/utilidadesController';


class UtilidadesRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/',utilidadesController.create);
        this.router.get('/',utilidadesController.read);
        this.router.put('/:id',utilidadesController.update);
        this.router.delete('/:id', utilidadesController.delete);
        this.router.get('/:id', utilidadesController.readOne); 
    }
}

const utilidadesRoutes = new UtilidadesRoutes();
export default utilidadesRoutes.router;


