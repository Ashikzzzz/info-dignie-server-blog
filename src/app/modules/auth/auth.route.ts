import express from 'express';
import { authController } from './auth.controller';
import validateRequest from '../../middlewares/validationRequest';
import { authValidation } from './auth.validation';

const router = express.Router();

// login user
router.post(
  '/login',
  validateRequest(authValidation.loginValidationZodSchema),
  authController.loginUser,
);

export const authRoute = router;
