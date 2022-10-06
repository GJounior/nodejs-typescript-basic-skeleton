import { Router } from 'express'
import * as personController from '../controllers/person.controller'

const router = Router()

router.get("/", personController.show)
router.get("/years", personController.years)

export default router
