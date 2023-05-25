import express from 'express';
import upload from './upload.js';

const toolRouter = express.Router();

toolRouter.use('/upload', upload);

export default toolRouter;