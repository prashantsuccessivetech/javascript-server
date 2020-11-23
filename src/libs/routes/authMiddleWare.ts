import * as jwt from 'jsonwebtoken';
import hasPermission1 from './Permission';
import IRequest from '../../IRequest';
import { Response, NextFunction } from 'express';
export default (module: any, permissionType: string) => (req: IRequest, res: Response, next: NextFunction) => {

    try {
        console.log('Inside ValidationHandler Middleware');
        console.log('config is', module, permissionType);
        const token = req.headers.authorization;
        console.log(token);
        const User = jwt.verify(token, 'qwertyuiopasdfghjklzxcvbnm123456');
        console.log('user', User.result);
        req.userData = User.result;
        console.log(User.result.role);
        const result = hasPermission1(module, User.result.role, permissionType);
        console.log('result is', result);
        if (result === true)
            next();
        else {
            next({
                message: 'Unauthorised',
                status: 403
            });
        }
    }
    catch (err) {
        next({
            message: err
        });
    }
};