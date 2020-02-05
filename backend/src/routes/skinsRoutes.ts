import { Router } from 'express';
import { skinsController } from '../controllers/skinsController';


class SkinsRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/',skinsController.create);
        this.router.get('/',skinsController.read);
        this.router.put('/:id',skinsController.update);
        this.router.delete('/:id', skinsController.delete);
        this.router.get('/:id', skinsController.readOne); 
    }
}

const skinsRoutes = new SkinsRoutes();
export default skinsRoutes.router;


