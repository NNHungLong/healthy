import { faker } from '@faker-js/faker';

const labels = [
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
  '2023',
  '2024'
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
