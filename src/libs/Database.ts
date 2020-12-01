"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
import {default as seed} from './SeedData';
const mongoose = require("mongoose");
class database {
    static open(mongoURL) {
        return new Promise((resolve, reject) => {
            console.log('Inside open method');
            mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                seed();
                resolve(undefined);
            });
        });
    }
    static disconnect() {
        console.log('Inside Disconnect method');
        mongoose.disconnect();
    }
}
export default database;
