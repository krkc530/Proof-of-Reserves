import express from 'express';
import upload from './upload.js';
import update from './update.js';

const toolRouter = express.Router();

toolRouter.use('/upload', upload);
toolRouter.use('/update', update);

export default toolRouter;