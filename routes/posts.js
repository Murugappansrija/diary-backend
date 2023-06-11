import express from 'express'
import { getallpost,getpost,createpost,deletepost,updatepost } from '../controllers/post_controllers.js'

const router = express.Router()

router.get('/', getallpost)

router.get('/:id', getpost)

router.post('/', createpost)

router.delete('/:id', deletepost)

router.patch('/:id', updatepost)


export default router