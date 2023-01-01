import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend

} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const VerticalBarChart = ({ data }: any) => {

    const options = {
        plugins: {
            tooltip: {
                callbacks: {
                    title: (context) => {
                        return context[0].label.replaceAll(',', ' ')
                    }
                }
            }
        },
        scales: {
            y: { beginAtZero: true }
        }
    }

    return (
        <div className='mt-5'>
            <Bar data={data} options={options} />
        </div>
    );
};

export default VerticalBarChart;