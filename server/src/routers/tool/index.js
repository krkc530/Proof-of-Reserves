import express from 'express';
import upload from './upload.js';
import update from './update.js';
import addr from './addr.js';
import total_cm from './update_total_cm.js';

const toolRouter = express.Router();

toolRouter.use('/upload', upload);
toolRouter.use('/update', update);
toolRouter.use('/addr',addr);
toolRouter.use('/total_cm',total_cm);

export default toolRouter;