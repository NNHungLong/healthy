import { useState, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import options from './lineChatData/option';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const defaultData = {
  labels: [],
  dataSet: []
};
export default function LineChart({ recordOption = 'month' }) {
  const [data, setData] = useState(defaultData);
  const fetchData = async () => {
    const res = await fetch(`/api/bodyRecord/${recordOption}`);
    const data = await res.json();
    setData(data);
  };
  useLayoutEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recordOption]);
  const ref = useRef();
  if (!data.labels.length) return null;
  return <Line ref={ref} options={options} data={data} />;
}

LineChart.propTypes = {
  recordOption: PropTypes.string
};
