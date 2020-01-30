import { Router } from 'express';
import { armasController } from '../controllers/armasController';


class ArmasRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/',armasController.create);
        this.router.get('/',armasController.read);
        this.router.put('/:id',armasController.update);
        this.router.delete('/:id', armasController.delete);
        this.router.get('/:id', armasController.readOne);
    }
}

const armasRoutes = new ArmasRoutes();
export default armasRoutes.router;


