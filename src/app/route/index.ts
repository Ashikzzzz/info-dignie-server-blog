import express from 'express';
import { userRouter } from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRouter,
  },
];

moduleRoutes.map(route => router.use(route.path, route.route));

export default router;
