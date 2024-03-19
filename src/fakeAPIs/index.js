import { createServer, Model } from 'miragejs';

export default function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,

    models: {
      // user: Model,
      exercise: Model,
      diary: Model
    },

    seeds(server) {
      // server.create('user', { id: 1, username: 'admin', password: 'admin', name: 'Admin' });
      for (let i = 1; i <= 20; i++) {
        server.create('exercise', {
          id: i,
          date: '2021.05.21',
          exercise: '家事全般（立位・軽い）',
          energySpent: '26kcal',
          duration: '10 min'
        });
      }
      for (let i = 1; i <= 8; i++) {
        server.create('diary', {
          date: '2021.05.21',
          time: '23:25',
          title: '私の日記の記録が一部表示されます。',
          content:
            'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
        });
      }
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
    }
  });

  return server;
}
