import express from 'express';
import 'express-async-errors';
import getAllOrdersController from './controllers/orders.controller';
import {
  createProductController,
  getAllProductsController,
} from './controllers/products.controller';
import createUserController, { loginUserController } from './controllers/users.controller';
import errorMiddleware from './middlewares/errorMiddleware';
import loginValidation from './middlewares/loginValidation';

const app = express();

app.use(express.json());

app.post('/products', createProductController);

app.get('/products', getAllProductsController);

app.post('/users', createUserController);

app.get('/orders', getAllOrdersController);

app.post('/login', loginValidation, loginUserController);

app.use(errorMiddleware);

export default app;
