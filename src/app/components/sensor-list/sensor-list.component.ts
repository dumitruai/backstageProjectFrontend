import {Component, OnInit} from '@angular/core';
import {SensorDataService} from "../../services/sensor-data.service";
import {Timestamp} from "rxjs";

export interface SensorData {
  serial: string;
  application: number;
  timestamp: Timestamp<any>;
  sensor_type: string;
  device: string;
  v0: any;
  dwell_time: any;
}

@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.css']
})


export class SensorListComponent implements OnInit{

  sensorDataSource: SensorData[];
  baseDisplayedColumns: string[] = [
    'serial', 'application', 'timestamp', 'sensor_type',
    'device', 'v0', 'dwell_time'];


  constructor(private dataService: SensorDataService) {
    this.sensorDataSource = []
  }

  ngOnInit() {
    this.dataService.getSensorData().subscribe(data => {
      this.sensorDataSource = data;
    });
  }

}
