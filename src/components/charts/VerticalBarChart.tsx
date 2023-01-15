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
ChartJS.defaults.color = "#cbcbcb";

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
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    title: (context: any) => {
                        return context[0].label.replaceAll(',', ' ')
                    }
                }
            },
        },
        
    }

    return (
        <div>
            <Bar height={350} data={data} options={options}/>
        </div>
    );
};

export default VerticalBarChart;