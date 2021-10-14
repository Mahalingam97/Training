import express ,{ Request,Response, NextFunction, response } from "express";

const router = express.Router(); 
var datas=require('./emojiList.json');

router.get('/search', (request:Request,response:Response,next:NextFunction) => {
    try{
        return response.status(200).send(datas);
    }catch(error){
      return response.status(500).send(`Somthing went wrong...`);
    }
})

module.exports = router;