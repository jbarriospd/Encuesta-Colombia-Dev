import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,

} from 'chart.js';
ChartJS.defaults.color = "#cbcbcb";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);


export const LineChart = (props: any) => {
    const { data } = props;

    const options = {
        responsive: true,

    }

    return (
        <div>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;