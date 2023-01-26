const Scrap = require('../models/scrap')

const addData = (url,wordCount,imageUrls) => {
    return new Promise(async (resolve,reject) => {
        try {
            const create = await Scrap.create({
                websiteUrl : url,
                wordsCount : wordCount,
                images : imageUrls,
                imageCount : imageUrls.length,
                favourite : false
            })
            resolve(create)
        } catch (error) {
            reject("Not Saved")            
        }

    })
    // console.log(imageUrls,data)
}

const getData = () => {
    return new Promise(async (resolve,reject) => {
        try {
            const data = await Scrap.find()
            resolve(data)
        } catch (error) {
            reject("Data unable to fetch")
        }

    })
}

const updateData = (id) => {
    return new Promise(async (resolve,reject) => {
        try {
            const data = await Scrap.findById(id)
            if(data.favourite){
                const updation = await Scrap.findByIdAndUpdate(id,{favourite:false})
            }else{
                const updation = await Scrap.findByIdAndUpdate(id,{favourite:true})
            }
            resolve(updation)
        } catch (error) {
            reject("Data unable to fetch")
        }

    })
}

const deleteData = (id) => {
    return new Promise(async (resolve,reject) => {
        try {
            const data = await Scrap.findByIdAndDelete(id)
            resolve(data)
        } catch (error) {
            reject("Data unable to fetch")
        }

    })
}

module.exports = {
    addData,
    getData,
    updateData,
    deleteData
}