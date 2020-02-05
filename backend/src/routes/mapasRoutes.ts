import { Router } from 'express';
import { mapasController } from '../controllers/mapasController';


class MapasRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/',mapasController.create);
        this.router.get('/',mapasController.read);
        this.router.put('/:id',mapasController.update);
        this.router.delete('/:id', mapasController.delete);
        this.router.get('/:id', mapasController.readOne); 
    }
}

const mapasRoutes = new MapasRoutes();
export default mapasRoutes.router;


