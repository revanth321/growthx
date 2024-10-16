import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

const port = process.env.PORT || 5231;
import adminRoutes from './routes/adminRoutes.js';
import userRoutes from './routes/userRoutes.js'

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);
app.get('/', (req, res) => res.send("Server up"));
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`Server started on ${port}`));