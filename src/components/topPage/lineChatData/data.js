import { faker } from '@faker-js/faker';

const labels = [
  '6月',
  '7月',
  '8月',
  '9月',
  '10月',
  '11月',
  '12月',
  '1月',
  '2月',
  '3月',
  '4月',
  '5月'
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
