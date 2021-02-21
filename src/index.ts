import * as express from 'express';
import { Request, Response } from 'express';
import { routes } from './routes';
import * as dotenv from 'dotenv';
dotenv.config();

const { DB_USER, DB_PWD, DB_NAME, DB_URI, PORT } = process.env;
export const mongoConnectionString = `mongodb+srv://${DB_USER}:${DB_PWD}@${DB_URI}/${DB_NAME}?retryWrites=true&w=majority`;
export const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'testing..',
  });
});

if (require.main === module) { // true if file is executed
  app.listen(PORT, () => {
    console.log(`server started at localhost: ${PORT}`);
  });
}

export default app;
