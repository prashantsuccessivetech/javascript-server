import * as express from "express";
import * as bodyParser from "body-parser";
import { notFoundRoute, errorHandler } from './libs/routes';
import router from './router';
import Database from './libs/Database';
import * as swaggerJsDoc from 'swagger-jsdoc';
import * as swaggerUI from 'swagger-ui-express';
import mainRouter from "./router";

class Server {
  private app
  constructor(private config) {
    this.app = express();
  }
  bootstrap() {
    this.initBodyParser();
    this.setupRouts();
    return this;
  }
  initSwagger = () => {
    const options = {
      definition: {
        info: {
          openapi: '3.0.0',
          description: 'An express app performing CRUD operation after authentication',
          version: '1.0.0',
          title: 'First express app',
          properties: {
            email: 'prashant.kumar@successive.tech'
          },
        },
        securityDefinitions: {
          Bearer: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'headers'
          }
        }
      },
      basePath: '/api',
      swagger: '4.1',
      apis: ['./src/controllers/**/routes.ts'],
    };
    const swaggerSpec = swaggerJsDoc(options);
    return swaggerSpec;
  }
  public setupRouts() {
    // const { app }= this;
    this.app.use('/api', router)

    this.app.use('/health-check', (req, res) => {
      console.log("inside Second middleware");
      res.send("I am OK");
    });
    this.app.use('/api', mainRouter);
    this.app.use('/swagger', swaggerUI.serve, swaggerUI.setup(this.initSwagger()));
    this.app.use(notFoundRoute);
    this.app.use(errorHandler);
    this.app.use((req, res, next) => {
      next({
        error: "Not Found",
        code: 404

      })
    })

    this.app.use((err, req, res, next) => {
      console.log(err);
      res.json(
        {
          "error ": err.error,
          status: err.code,
          message: err.message || "Error",
          timeStamp: new Date()

        }
      )
    });
    return this;
  }
  public initBodyParser() {
    this.app.use(bodyParser.json());
  }
  run() {
    const { app, config: { PORT } } = this;
    Database.open('mongodb://localhost:27017/express-training')
      .then((res) => {
        console.log('Succesfully connected to Mongo');
        app.listen(PORT, (err) => {
          if (err) {
            console.log(err);
          }
          else {
            console.log(`App is running on port ${process.env.PORT}`);
          }
        });
      })
      .catch(err => console.log(err));
    return this;
  }

}
export default Server;