const express = require('express')
const router = express.Router()

const NftController = require('../controllers/nftController').NftController
const upload = require('../controllers/NftController').upload
const checkAuth = require('../middleware/auth').checkAuth

router.get('/create',checkAuth,NftController.createNftHome)
router.post('/create',checkAuth,upload.single('image'),NftController.createNft)
router.get('/dashboard',checkAuth,NftController.dashboard)
router.get('/edit/:id',checkAuth,NftController.updateNftPage)
router.post('/edit',checkAuth,upload.single('image'),NftController.updateNft)
router.post('/delete',checkAuth,NftController.deleteNft)
router.get('/view/:id',NftController.singleNftView)
 
module.exports = router