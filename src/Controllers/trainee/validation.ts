import { TraineeValidationResponse } from "../../libs/routes/Constants";

const config = {
    get: {
        skip: {
            required: false,
            default: 0,
            number: true,
            in: ['query'],
            errorMessage: TraineeValidationResponse.getskip,   
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
        }
    },
    Delete: {
        id: {
            required: true,
            errorMessage: TraineeValidationResponse.deleted,
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
