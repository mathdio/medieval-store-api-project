import express from 'express';
import 'express-async-errors';
import { getAllOrdersController, createOrderController } from './controllers/orders.controller';
import {
  createProductController,
  getAllProductsController,
} from './controllers/products.controller';
import createUserController, { loginUserController } from './controllers/users.controller';
import auth from './middlewares/auth';
import errorMiddleware from './middlewares/errorMiddleware';
import loginValidation from './middlewares/loginValidation';
import productAmountValidation from './middlewares/productAmountValidation';
import productNameValidation from './middlewares/productNameValidation';
import {
  usernameValidation,
  vocationValidation, levelValidation, passwordValidation } from './middlewares/usernameValidation';

const app = express();

app.use(express.json());

app.post('/products', productNameValidation, productAmountValidation, createProductController);

app.get('/products', getAllProductsController);

app.post(
  '/users',
  usernameValidation,
  vocationValidation,
  levelValidation,
  passwordValidation,
  createUserController,
);

app.get('/orders', getAllOrdersController);

app.post('/login', loginValidation, loginUserController);

app.post('/orders', auth, createOrderController);

app.use(errorMiddleware);

export default app;
