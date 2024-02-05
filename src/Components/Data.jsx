import { useState, useEffect } from 'react';

let exportdata = [];

const Fetch = () => {
  const [chartdata, setChartData] = useState([]);
  useEffect(() => {
    fetch('https://isrweb.temple.edu/projects/beheardphilly/phila/bardata.php')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        exportdata  = data;
        setChartData(data);
      });
  }, []);
  return (
    <div>
      {chartdata.map((chartdata) => (
        // <p>{chartdata.mode} {chartdata.item} {chartdata.code} {chartdata.response} {chartdata.count}</p>
        <p>{chartdata.mode}</p>
      ))}
    </div>
  );
};
export default exportdata;