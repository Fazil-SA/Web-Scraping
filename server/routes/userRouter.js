const express = require('express')
const router = express.Router()

const { dataScrap, history, updateHistory, deleteHistory } = require('../controllers/scrapController')

router.post('/wordcount', dataScrap);

router.get('/history', history);

router.post('/historyUpdate', updateHistory);

router.post('/historyDelete', deleteHistory);

module.exports = router     