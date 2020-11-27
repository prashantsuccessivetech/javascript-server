import { userInfo } from 'os';
import {IPermissions} from './Interfaces';
export const permissions:IPermissions =
{
'getUsers': {
all: ['head-trainer'],
read : ['trainee', 'trainer'],
write : ['trainer'],
Delete: [],
}
}

export const TraineeControllerResponse = {
    insideGet: 'Inside get method of Trainee Controller',
    getMessage: 'Trainee displayed successfully',
    limit:'Trainee limit method of Trainee Controller',
    create :'Inside create method of Trainee Controller', 
    update :'Inside update method of Trainee Controller',
    delete :'Inside delete method of Trainee Controller',
}

export const TraineeValidationResponse = {
    getSkip: 'Skip is invalid' ,
    createid:'Name is required',
    deleteid:'Id is required',
    getlimit: 'limit is required'
}

export const payLoad = {
    'iss': 'Successive Technologies',
    'iat': 1604858574,
    'exp': 1636394601,
    'aud': 'www.successive.in',
    'sub': 'Learn and Implement',
    'email': '',
    'password': ''
};

