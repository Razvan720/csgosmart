import { Router } from 'express';
import { updatesController } from '../controllers/updatesController';


class UpdatesRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/', updatesController.create);
        this.router.get('/', updatesController.read);
        this.router.put('/:id', updatesController.update);
        this.router.delete('/:id', updatesController.delete);
        this.router.get('/:id', updatesController.readOne);
    }
}

const updatesRoutes = new UpdatesRoutes();
export default updatesRoutes.router;


