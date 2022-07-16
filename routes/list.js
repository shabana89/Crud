import express from 'express';
import list from '../db/index.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({status:200, payload:list})
});

export default router;