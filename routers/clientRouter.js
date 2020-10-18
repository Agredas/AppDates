const router = require('express').Router();
const ClientController = require('../controllers/clientController');

router.post('/register', ClientController.register);
router.post('/login', ClientController.login);
router.post('/logout', ClientController.logout);
router.get('/showClients', ClientController.showClients);
router.get('/showId/:id', ClientController.showClientId);
router.put('/modify', ClientController.modify);
router.delete('/delete/:id', ClientController.deleteClient);

module.exports = router;