import { Router } from 'express';
import publicacionController from '../controllers/publicacionController.js';

const router = Router();

router.get('/data/:page/:num/:prop/:value',publicacionController.data)
router.post('/search/lista',publicacionController.search)
router.post('/:tipo',publicacionController.create)
router.put('/:id/:tipo',publicacionController.update)
router.get('/item/:id',publicacionController.item)
export default router;