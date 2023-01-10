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

    const options = {
        indexAxis: 'y' as const,
        plugins: {
            legend: { display: false },
            
           
        },
        scale: {
            ticks: {
              backdropColor: 'rgba(122,156,23,1)'
            }
        },
       /*  scales: {
            x: {
                ticks: {
                    backdropColor: 'rgb(0,0,240)'
                }
            },
        }, */
    }

    return (
        <div>
            <Bar data={data} options={options} />
        </div>
    );
};



export default HorizontalBar;