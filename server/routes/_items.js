import express from 'express';

//import controller functions
import { _function } from '../controllers/_items.js';

const router = express.Router();

//all the routes that have to do something with _items
router.get('/', _function);

export default router;
