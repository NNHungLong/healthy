import { faker } from '@faker-js/faker';

const labels = [
  '02.08',
  '02.15',
  '02.22',
  '03.01',
  '03.08',
  '03.15',
  '03.22',
  '03.29',
  '04.02',
  '04.12',
  '04.19',
  '04.26'
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
