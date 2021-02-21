import { MongoClient, MongoError } from "mongodb";
import { mongoConnectionString, mongoOptions } from '../index';

export interface Imsg {
    message: string,
    result:  {
        [key: string]: any
    }
}

export default {
    async getItems(req, res) {
        try {
            const mongoClient = new MongoClient(mongoConnectionString, mongoOptions);
            await mongoClient.connect();
            const result = await mongoClient.db('express-app').collection('items').find().toArray();
            res.statusCode = 200;
            res.json(<Imsg>{ message: 'here are your query results', result });
            mongoClient.close();
        } catch (err) {
            throw new MongoError(err);
        }
    },
    async postItem(req, res) {
        if (req.body.name && req.body.cost) {
            try {
                const { app, body: { name, cost } } = req;
                const mongoClient = new MongoClient(mongoConnectionString, mongoOptions);
                await mongoClient.connect();
                await mongoClient.db('express-app').collection('items').insertOne({ name, cost})
                const findResult = await mongoClient.db('express-app').collection('items').find().toArray();
                res.statusCode = 201;
                res.json(<Imsg>{ message: 'post was successful', result: findResult });
                mongoClient.close();
            } catch (err) {
                throw new MongoError(err);
            }
        } else {
            res.statusCode = 400;
            res.json(<Imsg>{
                message: 'body params not included'
            })
        }
    }
}