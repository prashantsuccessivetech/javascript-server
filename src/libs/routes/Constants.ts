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
insideGet:'Inside get method of Trainee Controller',
Getmessage:'Trainee displayed successfuly',
Getlimit:'Trainee get limit method of Trainee controller',
create :'Inside create method of Trainee Controller',
update :'Inside update method of Trainee Controller',
delete : 'Inside delete method of Trainee Controller',

}
export const TraineeValidationResponse = {
getskip:'skip is invalid',
getlimit:'limit is invalid',
created:'Name is required',
deleted:'Id is required',
}

export const traineeControllerResponse = {
    insideGet: 'Inside get method of Trainee Controller',
    GetMessage:'Trainee displayed successfully',
    Getlimit:'Trainee get limit method of Trainee Controller',
    create :'Inside create method of Trainee Controller',
    update :'Inside update method of Trainee Controller',
    delete :'Inside delete method of Trainee Controller',
    }
    export const TraineeValidationResponse = {
        getskip:'skip is invalid',
        getlimit:'limit is invalid',
        created:'Name is required',
        deleted:'Id is required',
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
