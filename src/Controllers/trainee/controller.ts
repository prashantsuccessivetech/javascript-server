import { TraineeControllerResponse } from '../../libs/routes/Constants';
class traineeController {
    static instance: traineeController

    static getInstance() {
        if (traineeController.instance) {
            return traineeController.instance
        }
        traineeController.instance = new traineeController();
        return traineeController.instance;
    }

    get(req, res, next) {
        try {
            console.log(TraineeControllerResponse.insideGet);

            res.send({
                message: TraineeControllerResponse.getMessage,
                data: [
                    {
                        name: "prashant",
                        address: "Noida"
                    }
                ]
            });
        }
        catch (err) {
            console.log("Inside err", err);
        }
    }

    create(req, res, next) {
        try {
            
            console.log(TraineeControllerResponse.create);

            res.send({

                message: "Trainee created  successfully",

                data: [
                    {
                        name: req.body.name,
                        address: req.body.add
                    }
                ]
            });
        }
        catch (err) {
            console.log("Inside err", err);
        }
    }

    update(req, res, next) {
        try {
            
            console.log(TraineeControllerResponse.update)

            res.send({

                message: "Trainee updated successfully",


                data: [
                    {
                        name: "prashant",
                        address: "Noida"
                    }
                ]
            });
        }
        catch (err) {
            console.log("Inside err", err);
        }
    }
    delete(req, res, next) {
        try {
            
            console.log(TraineeControllerResponse.delete);

            res.send({

                message: "Trainee deleted successfully",

                data: [
                    {
                        name: "prashant",
                        address: "Noida"
                    }
                ]
            });
        }
        catch (err) {
            console.log("Inside err", err);
        }
    }
}

export default traineeController.getInstance()
