import express from 'express';
import upload from './upload.js';
import setup from './setup.js'

const toolRouter = express.Router();

toolRouter.use('/upload', upload);
toolRouter.use('/setup',setup);

export default toolRouter;