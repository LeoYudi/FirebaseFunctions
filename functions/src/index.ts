import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';

import './database';
import { create, getLink } from './controllers/LinkController';

export const testeFunctions = functions.https.onRequest(
  async (request, response) => {
    const app = express();

    app.use(cors({ origin: true }));
    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ limit: '50mb', extended: false }));

    app.get('/', (req, res) => res.send('functions is running'));

    app.post('/link', create);
    app.get('/link/:created', getLink);

    return app(request, response);
  }
);
