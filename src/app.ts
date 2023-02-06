import express from 'express';
import {
  createProductController,
  getAllProductsController,
} from './controllers/products.controller';
import createUserController from './controllers/users.controller';

const app = express();

app.use(express.json());

app.post('/products', createProductController);

app.get('/products', getAllProductsController);

app.post('/users', createUserController);

export default app;
