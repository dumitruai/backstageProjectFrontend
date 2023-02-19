import {Component, OnInit} from '@angular/core';

import {SensorDataService} from "../../services/sensor-data.service";
import {Timestamp} from "rxjs";
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export interface GraphData {
  serial: string;
  timestamp: Timestamp<any>;
  dwell_time: any;
}

@Component({
  selector: 'app-sensor-graph',
  templateUrl: './sensor-graph.component.html',
  styleUrls: ['./sensor-graph.component.css']
})
export class SensorGraphComponent implements OnInit {
  chart: any;
  selectedSerial: string;
  serials: any[];
  graphDataSource: GraphData[];

  constructor(private dataService: SensorDataService) {
    this.graphDataSource = [];
    this.serials = [];
    this.selectedSerial = '';
  }

  ngOnInit() {
    this.dataService.getDataForChart().subscribe(data => {
      this.graphDataSource = data;
      this.serials = this.graphDataSource.map(item => item.serial)
        .filter((value, index, self) => self.indexOf(value) === index);
      this.selectedSerial = this.serials[0];
      this.createChart()
    });
  }

  updateChart() {
    const filteredData = this.graphDataSource.filter(item => item.serial === this.selectedSerial);
    const timestamps = filteredData.map(item => item.timestamp);
    const dwellTimes = filteredData.map(item => item.dwell_time);
    this.chart.data.labels = timestamps;
    this.chart.data.datasets[0].data = dwellTimes;
    this.chart.update();
  }

  createChart() {
    this.chart = new Chart('my-chart', {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Dwell Time',
            data: [],
            borderColor: 'blue',
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
    this.updateChart();
  }
}
