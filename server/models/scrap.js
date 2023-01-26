const mongoose = require('mongoose')
const Schema = mongoose.Schema

const scrapSchema = new Schema({
    websiteUrl : {
        type : String,
        required : true
    },
    wordsCount : {
        type : Number,
        required : true
    },
    imageCount : {
        type : Number,
        required : true
    },
    images : [],
    favourite : {
        type : Boolean,
        default : true
    }
},{timestamps:true})

module.exports = mongoose.model('Scrap',scrapSchema)