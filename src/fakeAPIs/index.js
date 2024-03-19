import { createServer, Model } from 'miragejs';
import eatingRecord from './dummyData/eatingRecords';
import diary from './dummyData/diary';
import exercise from './dummyData/exercise';
import bodyRecordByYear from './dummyData/bodyRecordByYear';
import bodyRecordByMonth from './dummyData/bodyRecordByMonth';
import bodyRecordByWeek from './dummyData/bodyRecordByWeek';
import bodyRecordByDay from './dummyData/bodyRecordByDay';

export default function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,

    models: {
      exercise: Model,
      diary: Model,
      eatingRecord: Model
    },

    seeds(server) {
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
      this.get('/exercise', (schema) => {
        return schema.exercises.all();
      });
      this.get('/diary', (schema) => {
        return schema.diaries.all();
      });
      this.get('/eatingRecord', (schema) => {
        return schema.eatingRecords.all();
      });
      this.get('/bodyRecord/year', () => {
        return bodyRecordByYear;
      });
      this.get('/bodyRecord/month', () => {
        return bodyRecordByMonth;
      });
      this.get('/bodyRecord/week', () => {
        return bodyRecordByWeek;
      });
      this.get('/bodyRecord/day', () => {
        return bodyRecordByDay;
      });
    }
  });

  return server;
}
