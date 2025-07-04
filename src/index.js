import express from 'express';
import dotenv from 'dotenv';
import usersRoutes from './routes/users.routes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', usersRoutes);

const PORT = process.env.PORT || 8008;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
