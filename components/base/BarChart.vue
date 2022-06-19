<template>
  <div class="py-6 px-4">
    <p
      class="text-center text-h6 white--text"
    >
      {{ title }}
    </p>
    <Bar
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs/legacy'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
)

ChartJS.defaults.color = '#ffffff'

export default {
  name: 'BaseBarChart',
  components: { Bar },
  props: {
    title: {
      type: String,
      default:
        'Total Search Perkategori'
    },
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 100
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      chartData: {
        labels: [
          'Honorium',
          'Acara',
          'Perjalanan Dinas',
          'Penginapan',
          'Rapat',
          'Pemeliharaan'
        ],
        datasets: [
          {
            label: 'Total Query',
            data: [
              40, 20, 60, 80, 30, 50
            ],
            backgroundColor: '#FDC500'
          }
        ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>

<style scoped>
.neumorphism-shadow {
  box-shadow: -6px -6px 12px #ffffff,
    6px 6px 12px
      rgba(111, 112, 113, 0.8);
  border-radius: 10px;
}
</style>
