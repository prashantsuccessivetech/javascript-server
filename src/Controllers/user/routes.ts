import * as express from 'express';
import UserController from './controller';
import { authMiddleWare } from '../../libs/routes/authMiddleWare';
import { validationHandler } from '../../libs/routes/validationhandller';
import config from './validation';
const userRouter = express.Router();


userRouter.route('/')
    .get(UserController.get)                              
    .post(UserController.create)                          
    .put( UserController.update)                          
    .delete(UserController.delete);                       
userRouter.route('/login')
    .post(UserController.login);
userRouter.route('/userDetail')
    .get(authMiddleWare('getUsers', 'read'), UserController.userDetail);



export default userRouter;