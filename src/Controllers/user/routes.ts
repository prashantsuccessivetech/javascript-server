import * as express from 'express';
import UserController from './controller';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { permissions} from '../../libs/routes/Constants';
import validationHandler from '../../libs/routes/validationhandller';
import config from './validation';
import { Router } from 'express';

const UserRouter = Router();
UserRouter.route('/')
.get( UserController.get)
.post( UserController.create)
.put( UserController.update)
.delete( UserController.delete);
UserRouter.route('/me')
.get(authMiddleWare ( permissions.getUsers, 'all' ), UserController.me);

UserRouter.route('/login')
.post( validationHandler ( config.login ) , UserController.login );

export default UserRouter;
