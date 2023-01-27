const scrapHelper = require('../helpers/webScrap')
const cheerio = require('cheerio');
const axios = require('axios')
const request = require('request'); 
const asyncHandler = require('express-async-handler')

const dataScrap = asyncHandler(async (req,res) => {
    try {
        // console.log(req.body)
        const url = req.body.url;
        console.log(url)
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        //fetch text
        const text = $('body').text();
        const wordCount = text.split(' ').length;
        // console.log(wordCount)

        // Fetch all img tags
        const images = $('img');
        const imageUrls = [];

        // Extract the URL from the src attribute of each img tag
        images.each((i, img) => {
            imageUrls.push(img.attribs.src);
        });

        const result = await scrapHelper.addData(url, wordCount, imageUrls)
        res.json(result)
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error fetching word count' });
    }
})

const history = asyncHandler(async (req,res) => {
    try {
        const datas = await scrapHelper.getData()
        res.json({ datas });
    } catch (err) {
        res.status(500).json({ error: 'Error fetching table data' });
    }
})

const updateHistory = asyncHandler(async (req,res) => {
    try {
        const id = req.body.id
        const datas = await scrapHelper.updateData(id)
        res.json({ datas });
    } catch (err) {
        res.status(500).json({ error: 'Error fetching table data' });
    }
})

const deleteHistory = asyncHandler(async (req,res) => {
    try {
        const id = req.body.id
        const datas = await scrapHelper.deleteData(id)
        res.json({ datas });
    } catch (err) {
        res.status(500).json({ error: 'Error fetching table data' });
    }
})

module.exports = {
    dataScrap,
    history,
    updateHistory,
    deleteHistory
}