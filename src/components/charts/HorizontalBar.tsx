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


export const HorizontalBar = (props: any) => {
    const { data } = props;

    const options = { indexAxis: 'y' as const }

    return (
        <div>
            <Bar data={data} options={options} />
        </div>
    );
};



export default HorizontalBar;