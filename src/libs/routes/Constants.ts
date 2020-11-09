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
    create :'Inside post method of Trainee Controller', 
    update :'Inside post method of Trainee controller',
    delete :'Inside delete method of Trainee Controller',
}

export const TraineeValidationResponse = {
    getSkip: 'Skip is invalid' ,
    createid:'Name is required',
    deleteid:'Id is required',
}


