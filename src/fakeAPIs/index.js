import { createServer, Model } from 'miragejs';
import eatingRecord from './dummyData/eatingRecords';
import diary from './dummyData/diary';
import exercise from './dummyData/exercise';

export default function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,

    models: {
      // user: Model,
      exercise: Model,
      diary: Model,
      eatingRecord: Model
    },

    seeds(server) {
      // server.create('user', { id: 1, username: 'admin', password: 'admin', name: 'Admin' });
      for (let i = 1; i <= 20; i++) {
        server.create('exercise', {
          id: i,
          ...exercise
        });
      }
      for (let i = 1; i <= 8; i++) {
        server.create('diary', diary);
      }
      eatingRecord.forEach((record, index) => {
        server.create('eatingRecord', {
          id: index + 1,
          ...record
        });
      });
    },
    routes() {
      this.namespace = 'api';
      // this.get('/users', (schema) => {
      //   return schema.users.all();
      // });
      // this.post('/login', (schema, request) => {
      //   const { username, password } = JSON.parse(request.requestBody);
      //   const user = schema.users.findBy({ username, password });
      //   if (user) {
      //     return {
      //       token: 'auth-token',
      //       user: {
      //         id: user.id,
      //         name: user.name
      //       }
      //     };
      //   } else {
      //     return new Response(401, {}, { error: 'Invalid credentials' });
      //   }
      // });
      this.get('/exercise', (schema) => {
        return schema.exercises.all();
      });
      this.get('/diary', (schema) => {
        return schema.diaries.all();
      });
      this.get('/eatingRecord', (schema) => {
        return schema.eatingRecords.all();
      });
    }
  });

  return server;
}
