export default {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index',
    intersect: false
  },
  stacked: false,
  plugins: {
    title: {
      display: false
    },
    legend: {
      display: false
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          let label = context.dataset.label || '';
          if (context?.dataset?.yAxisID === 'y') {
            return label + ': ' + context.parsed.y + ' (kg)';
          }
          return label + ': ' + context.parsed.y + ' (%)';
        }
      }
    }
  },
  scales: {
    x: {
      display: true,
      grid: {
        color: '#777777'
      },
      ticks: {
        color: '#ffffff'
      },
      border: {
        display: false
      }
    },
    y: {
      type: 'linear',
      display: true,
      title: {
        display: true,
        text: 'Body Mass (kg)',
        color: '#ffffff'
      },
      grid: {
        display: false
      },
      position: 'left',
      ticks: {
        color: '#ffffff'
      }
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      title: {
        display: true,
        text: 'Body Fat (%)',
        color: '#ffffff'
      },
      grid: {
        drawOnChartArea: false,
        display: false
      },
      ticks: {
        color: '#ffffff'
      }
    }
  }
};
