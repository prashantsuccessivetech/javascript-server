
import { TraineeValidationResponse } from "../../libs/routes/Constants";
import { TraineeControllerResponse, TraineeValidationResponse } from '../../libs/routes/Constants';

const config = {
    get: {
        skip: {
            required: false,
            default: 0,
            number: true,
            in: ['query'],

            errorMessage: TraineeValidationResponse.getskip,   
            errorMessage: TraineeValidationResponse.getskip,

            errorMessage: TraineeValidationResponse.getSkip,

        },
        limit: {
            required: false,
            default: 10,
            number: true,
            in: ['query'],
            errorMessage: TraineeValidationResponse.getlimit,
        }
    },
    create: {
        id: {
            required: true,
            string: true,
            in: ['body'],
            custom: (Value) => {
                console.log(`Value ${Value}`);
                throw { error: 'Error Occured', message: 'Message' };
            }
        },
        name: {
            required: true,
            regex: '',
            in: ['body'],
            errorMessage: TraineeValidationResponse.created,

            errorMessage: TraineeValidationResponse.created,

            errorMessage: TraineeValidationResponse.createid,

        }
    },
    Delete: {
        id: {
            required: true,

            errorMessage: TraineeValidationResponse.deleted,
            errorMessage: TraineeValidationResponse.deleteid,

            in: ['params']
        }
    },
    update: {
        id: {
            required: true,
            string: true,
            in: ['body']
        },
        dataToUpdate: {
            in: ['body'],
            required: true,
            isObject: true,
        }
    }
};

export default config;
