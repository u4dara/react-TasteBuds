const express = require('express')
const router = express.Router()
const {getOutlets, addOutlet, updateOutlet, deleteOutlet} = require('../controllers/outletController')

router.route('/').get(getOutlets).post(addOutlet)

router.route('/:id').put(updateOutlet).delete(deleteOutlet)


module.exports = router