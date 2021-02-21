jest.useFakeTimers();
import app from '../src/index';
import * as supertest from 'supertest';
import { MongoClient, MongoError } from 'mongodb';
import { mongoConnectionString, mongoOptions } from '../src/index';

describe('app', () => {
  let request;
  beforeEach((done) => {
    request = supertest(app);
    done();
  });
  afterAll(async (done) => {
    try {
      const mongoClient = new MongoClient(mongoConnectionString, mongoOptions);
      await mongoClient.connect();
      await mongoClient.db('express-app').dropCollection('items');
      mongoClient.close();
      done();
    } catch (err) {
      throw new MongoError(err);
    }
  });
  it('should return a successful response for GET /', async (done) => {
      try {
        await request.get('/').expect(200);
        done();
      } catch (err) {
        done(err);
      }
  });
  it('should post an item to the database', async (done) => {
    try {
      const response = await request.post('/items')
        .send({ name: 'turkey', cost: '20.00' })
        .expect(201) // supertest expect method

        expect(response.body.message).toBe('post was successful') // jest expect 
        done();
    } catch (err) {
      done(err);
    }
  });
  it('should post another item to the database', async (done) => {
      try {
        const response = await request.post('/items')
        .send({ name: 'sandwich', cost: '4.99' })
        .expect(201)

        expect(response.body).toHaveProperty('result');
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe('post was successful');
        done();
      } catch (err) {
        done(err);
      }
  });
  it('should return some items from /items route', async (done) => {
      try {
        const response = await request.get('/items')
          .expect('Content-type', /json/)
          .expect(200)

          expect(response.body.result[0].name).toBe('turkey');
          expect(response.body.result[1].name).toBe('sandwich');
          expect(response.body.result).toHaveLength(2);
          done();
      } catch (err) {
        done(err);
      }
  });
  it('should return a failed response', async (done) => {
    try {
      const response = await request.post('/items').expect(400);
      expect(response.body.message).toBe('body params not included');
      done();
    } catch (err) {
      done(err);
    }
  });
});
