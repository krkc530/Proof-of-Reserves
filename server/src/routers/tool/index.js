import express from 'express';
import upload from './upload.js';
import update from './update.js';
import addr from './addr.js';

const toolRouter = express.Router();

toolRouter.use('/upload', upload);
toolRouter.use('/update', update);
toolRouter.use('/addr',addr);

export default toolRouter;