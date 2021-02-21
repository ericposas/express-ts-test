import { Router } from "express";
import itemsHandler from './handlers/items';
import * as dotenv from 'dotenv';
dotenv.config();

const routes = Router();

routes
    .route('/items')
    .get(itemsHandler.getItems)
    .post(itemsHandler.postItem)

export {
    routes
};
