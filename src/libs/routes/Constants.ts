import { userInfo } from 'os';
import { IPermissions } from './Interfaces';
export const permissions: IPermissions =
{
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        Delete: [],
    }
}

export const traineeControllerResponse = {
    insideGet: 'Inside get method of Trainee Controller',
    Getmessage: 'Trainee displayed successfuly',
    Getlimit: 'Trainee get limit method of Trainee controller',
    create: 'Inside create method of Trainee Controller',
    update: 'Inside update method of Trainee Controller',
    delete: 'Inside delete method of Trainee Controller',

}
export const TraineeValidationResponse = {
    getskip: 'skip is invalid',
    getlimit: 'limit is invalid',
    created: 'Name is required',
    deleted: 'Id is required',
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

