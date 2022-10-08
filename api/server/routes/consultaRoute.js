import { Router } from 'express';
import publicacionController from '../controllers/publicacionController.js';

const router = Router();

router.get('/last/:ciudad',publicacionController.last)
router.get('/item/:id',publicacionController.consultaItem)
router.get('/all/:page/:num',publicacionController.consultaAll)
router.get('/data/:tipo/:contrato/:ciudad/:moneda/:irango/:frango',publicacionController.consulta)
export default router;