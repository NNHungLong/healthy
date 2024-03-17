import { createServer, Model } from 'miragejs';

export default function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model
    },

    seeds(server) {
      server.create('user', { id: 1, username: 'admin', password: 'admin', name: 'Admin' });
      server.create('user', { id: 2, username: 'guess', password: 'guess', name: 'Guess' });
    },

    routes() {
      this.namespace = 'api';
      this.get('/users', (schema) => {
        return schema.users.all();
      });
      this.post('/login', (schema, request) => {
        const { username, password } = JSON.parse(request.requestBody);
        const user = schema.users.findBy({ username, password });
        if (user) {
          return {
            token: 'auth-token',
            user: {
              id: user.id,
              name: user.name
            }
          };
        } else {
          return new Response(401, {}, { error: 'Invalid credentials' });
        }
      });
    }
  });

  return server;
}
