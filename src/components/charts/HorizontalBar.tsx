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


export const HorizontalBar = (props: any) => {
    const { data } = props;

    const options = {
        maintainAspectRatio: false,
        indexAxis: 'y' as const,
        plugins: {
            legend: { display: false },
        },
        scale: {
            ticks: {
                backdropColor: 'rgba(122,156,23,1)'
            }
        },
    }

    return (
        <div>
            <Bar height={350} data={data} options={options} />
        </div>
    );
};



export default HorizontalBar;