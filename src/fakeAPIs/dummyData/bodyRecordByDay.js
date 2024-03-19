import { faker } from '@faker-js/faker';

const labels = [
  '05.10',
  '05.11',
  '05.12',
  '05.13',
  '05.14',
  '05.15',
  '05.16',
  '05.17',
  '05.18',
  '05.19',
  '05.20',
  '05.21'
];
export default {
  labels,
  datasets: [
    {
      label: 'Body Mass',
      data: labels.map(() => faker.number.int({ min: 40, max: 80 })),
      borderColor: 'hsl(46, 100%, 56%)',
      backgroundColor: 'hsl(46, 100%, 56%)',
      yAxisID: 'y'
    },
    {
      label: 'Body Fat',
      data: labels.map(() => faker.number.int({ min: 5, max: 30 })),
      borderColor: 'hsla(163, 67%, 74%, 1)',
      backgroundColor: 'hsla(163, 67%, 74%, 1)',
      yAxisID: 'y1'
    }
  ]
};
