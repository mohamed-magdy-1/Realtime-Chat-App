
import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js';
import messagesRouter from './routes/message.route.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/messages', messagesRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})