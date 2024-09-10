import { jwtVerify } from '@kinde-oss/kinde-node-express';
import express from 'express';

const router = express.Router();
const verifier = jwtVerify('https://account.acme.corp');

export default router;
