import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Filler,
    Tooltip,
    Legend,

} from 'chart.js';

ChartJS.register(
    ArcElement,
    Filler,
    Tooltip,
    Legend,
);


export const PieChart = (props: any) => {
    const { data } = props;

    const options = {
        plugins: {
            legend: {
                position: 'right' as const
            }
        }
    }

    return (
        <div>
            <Pie data={data} options={options} />
        </div>
    );
};

export default PieChart;