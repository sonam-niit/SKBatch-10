const express= require('express');
const { getAllUser, getById, deleteById, updateById } = require('../controllers/user.controller');
const autheticate = require('../middelwares/authMiddleware');

const router= express.Router();

// router.route('/').get(getAllUser);
// router.route('/:id').get(getById).delete(deleteById).put(updateById);
//Below Routes I want to make them protected means 
//You can't access them without Login
router.get('/',autheticate,getAllUser); //protected path
router.get('/:id', autheticate,getById) //Protected Path
router.delete('/:id',autheticate, deleteById)
router.put('/:id',autheticate, updateById)

module.exports=router;