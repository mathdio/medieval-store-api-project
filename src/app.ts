import express from 'express';
import {
  createProductController,
  getAllProductsController,
} from './controllers/products.controller';

const app = express();

app.use(express.json());

app.post('/products', createProductController);

app.get('/products', getAllProductsController);

export default app;
