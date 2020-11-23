import * as express from 'express';

import TraineeController from './controller';
import validationHandler from '../../libs/routes/validationhandller'
import config from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';
const traineeRoutes = express.Router();
traineeRoutes.route('/')
        .get(authMiddleWare('trainee','read'),validationHandler( config.get ) , TraineeController.get )
        .post( authMiddleWare('trainee','write'),validationHandler( config.create ) , TraineeController.create )
        .put( authMiddleWare('trainee','all'),validationHandler( config.update ) , TraineeController.update )
        .delete(authMiddleWare('trainee','Delete'), validationHandler( config.Delete ) , TraineeController.delete );

traineeRoutes.route('/test')
        .get(TraineeController.get )
export default traineeRoutes;