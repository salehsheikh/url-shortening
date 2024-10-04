import express from 'express';
import Url from '../models/urls.js'
const router =express.Router();
router.get("/:urlId",async(req,res)=>{
    try{
        const url=await Url.findOne({urId:req.params.urlId});
        if(url){
            await Url.updateOne({
                urId:req.params.urlId,
            },
            {
                $inc: {accessCount: 1}
            }
        );
        return res.redirect(url.originalUrl);
        } else {
            res.status(404).json("Not found");
          }
        
    }
    catch (err) {
        console.log(err);
        res.status(500).json("Server Error");
      }
});
export default router;