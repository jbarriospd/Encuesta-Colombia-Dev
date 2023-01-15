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
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    title: (context) => {
                        return context[0].label.replaceAll(',', ' ')
                    }
                }
            },/* 
            scale: {
                ticks: {
                  backdropColor: 'rgba(122,156,23,1)'
                }
            }, */
        },
        scales: {
            y: {
              backdropColor: 'rgba(122,156,23,1)'
            }
          }
        
    }

    return (
        <div >
            <Bar data={data} options={options} className='mt-5 text-yellow-600'/>
        </div>
    );
};

export default VerticalBarChart;