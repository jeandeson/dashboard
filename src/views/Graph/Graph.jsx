import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts'
import {useCustomersContext} from '../../contexts/customersContext'
import axios from '../../plugins/axios'
import Table from '../../components/home/Table/Table';
import './Graph.css'
import Loading from '../../components/loading/Loading';

const Graph = () => {

  const { customers } = useCustomersContext();

  const [orders, setOrders] = useState();

  useEffect(() => {
    const fetchOrders = async () => {
      const {data} = await axios.get("orders")
      setOrders(data)
    }
    fetchOrders()
  }, [])

  const series = [{
    name: 'Inflation',
    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2]
  }];
   const options = {
    chart: {
      height: 350,
      type: 'pie',
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ["#304758"]
      }
    },
    
    xaxis: {
      categories: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      position: 'top',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          }
        }
      },
      tooltip: {
        enabled: true,
      }
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        }
      }
    
    },
    title: {
      text: 'Earning percentual this weak',
      floating: true,
      offsetY: 330,
      align: 'center',
      style: {
        color: '#444'

      }
    }
  }
  return ( 
    <>
        {orders ? (
          <div className="graph-container">
          <div className="graph-wrapper">
          <ReactApexChart options={options} series={series} type="bar" height={350} />
          </div>
          <div className="graph-wrapper">
            <Table orders={orders} />
          </div>
        </div>
        ): <Loading type={`spin`} color={`var(--blue)`}/>}
    </>
   );
}
 
export default Graph;