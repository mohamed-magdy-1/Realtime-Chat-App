import express from 'express';
const router = express.Router();

router.get('/sen',(req,res)=>{
    // Handle fetching messages logic
    res.send('Messages endpoint');
})



export default router;