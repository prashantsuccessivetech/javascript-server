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
Getmessage:'trainee displayed successfuly',
Getlimit:'trainee get limit method of trainee controller',
create :'Inside create method of trainee Controller',
update :'Inside update method of Trainee Controller',
delete : 'Inside delete method of Trainee Controller',

}
export const TraineeValidationResponse = {
getskip:'skip is invalid',
getlimit:'limit is invalid',
created:'Name is required',
deleted:'Id is required',
}