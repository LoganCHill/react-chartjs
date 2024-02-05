import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useEffect } from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from "@faker-js/faker"

let exportdata = [];

const Fetch = () => {
  const [chartdata, setChartData] = useState([]);
  useEffect(() => {
    fetch('https://isrweb.temple.edu/projects/beheardphilly/phila/modedata.php')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
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

const listItems = exportdata.map((item) => (
  <li key={item.id}>{item.name}</li>
));

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const iterator = exportdata.keys();

for (const key of iterator) {
  console.log(key);
}

export const zipcode = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const gender = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const race = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const age = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


export default function Statistics() {
    return (
            <div className="card">
              <div className="card-header">
                <h2>Participant Demographics</h2>
                <label for="mode" class="form-label p-2">Mode</label>
                <select name="mode" id="mode" class="form-select">
                  <option value="All">All Modes</option>
                  <option value="-WEB-">Web</option>
                  <option value="-PAPER-">Paper</option>
                  <option value="-PHONE-">Phone</option>
                  <option value="-01: Employee Newsletter-">Employee Newsletter</option>
                  <option value="-03: 311 Email-">311 Email</option>
                  <option value="-04: NextDoor-">NextDoor</option>
                  <option value="-05: City Resource Groups-">City Resource Groups</option>
                </select>
              </div>

              <div class="container">
                <div class="card-body">
                  <div class="row">
                    <div class="col-6 py-1">
                      <div class="card">
                        <h4 class="card-header">ZIP Code</h4>
                        <div id="zipcode" class="card-body">
                          <Bar options={options} data={zipcode} />
                        </div>
                      </div>
                    </div>
                      <div class="col-6 py-1">
                        <div class="card">
                        <h4 class="card-header">Gender</h4>
                        <div id="gender" class="card-body">
                          <Bar options={options} data={gender} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="container-sm">
                <div class="card-body">
                  <div class="row">
                    <div class="col-6 py-1">
                      <div class="card">
                        <h4 class="card-header">Age</h4>
                        <div id="age" class="card-body">
                          <Bar options={options} data={age} />
                        </div>
                      </div>
                    </div>
                      <div class="col-6 py-1">
                        <div class="card">
                        <h4 class="card-header">Race</h4>
                        <div id="zipcode" class="card-body">
                          <Bar options={options} data={race} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
  }