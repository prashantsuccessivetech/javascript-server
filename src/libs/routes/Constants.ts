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

export const traineeControllerResponse = {
    insideGet: 'Inside get method of Trainee Controller',
    GetMessage:'Trainee displayed successfully',
    Getlimit:'trainee get limit method of trainee controller',
    create :'Inside post method of trainee Controller',
    update :'inside post method of Trainee Controller',
    delete :'Inside delete method of Trainee Controller',
    }
    export const TraineeValidationResponse = {
        getskip:'skip is invalid',
        getlimt:'limit is invalid',
        created:'Name is required',
        deleted:'Id is required',
    }