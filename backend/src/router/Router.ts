import { Router } from 'express';
import fs = require('fs');
import swaggerUi = require('swagger-ui-express');
import TaskController from '../controller/TaskController';
import updateValidations from '../middlewares/updateValidations';

const swaggerFile = (`${process.cwd()}/swagger.json`);
const swaggerData = fs.readFileSync(swaggerFile, 'utf8');
const swaggerDocument = JSON.parse(swaggerData);

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
    this.router.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }
}

export default MainRouter;
