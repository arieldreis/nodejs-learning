import express from 'express';
import apiControl from '../controllers/apiControl.js'

const app = express();
const router = express.Router();
const controller = apiControl;
router.post('/', controller.post)
router.put('/:id', controller.put)
router.delete('/:id', controller.delete)
module.exports = router;