import { Router } from 'express';
import studentRouter from '@modules/student/Routes/studentRouter';
const routes = Router();

routes.use('/student', studentRouter);

export default routes;
