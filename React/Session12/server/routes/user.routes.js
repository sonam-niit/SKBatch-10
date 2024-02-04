const express= require('express');
const { addNewUser, getAllUser, getById, deleteById, updateById } = require('../controllers/user.controller');

const router= express.Router();

router.route('/').get(getAllUser);
router.route('/:id').get(getById).delete(deleteById).put(updateById);
// router.post('/', addNewUser)
// router.get('/', getAllUser)
// router.get('/:id', getById)
// router.delete('/:id', deleteById)
// router.put('/:id', updateById)

module.exports=router;