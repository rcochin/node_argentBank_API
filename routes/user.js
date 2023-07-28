const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/', userCtrl.createUser);
router.put('/:id', userCtrl.updateUser); 
router.delete('/:id', userCtrl.deleteUser);
router.get('/', userCtrl.getUsers);
router.get('/:id', userCtrl.getUsers);

module.exports = router;