import { Router } from 'express';
import TaskController from '../controller/TaskController';
import updateValidations from '../middlewares/updateValidations';

class MainRouter {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  public addRoute(
    controller: TaskController,
  ) {
    this.router.post('/task', controller.create);
    this.router.get('/task', controller.read);
    this.router.get('/task/:id', controller.readOne);
    this.router.put('/task/:id', updateValidations, controller.update);
    this.router.delete('/task/:id', controller.delete);
  }
}

export default MainRouter;
