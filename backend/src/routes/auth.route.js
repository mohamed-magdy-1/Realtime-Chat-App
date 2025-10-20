import express from 'express';
const router = express.Router();

router.get('/signup',(req,res)=>{
    // Handle signup logic
    res.send('Signup endpoint');
})

router.get('/login',(req,res)=>{
    // Handle login logic
    res.end('Login endpoint');
})


router.get('/logout',(req,res)=>{
    // Handle logout logic
    res.end("Logout endpoint")
})

export default router;