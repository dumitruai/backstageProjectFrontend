import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {SensorData} from "../components/sensor-list/sensor-list.component";
import {GraphData} from "../components/sensor-graph/sensor-graph.component";
import {SensorMessage} from "../components/sensor-upload/sensor-upload.component";

@Injectable({
  providedIn: 'root'
})
export class SensorDataService {

  constructor(private http: HttpClient) { }

  getSensorData(): Observable<any[]> {
    return this.http.get<SensorData[]>('/rest/sensor-data/');
  }

  getDataForChart(): Observable<any[]> {
    return this.http.get<GraphData[]>('rest/sensor-graph/')
  }

  postSensorData(message: SensorMessage){
     return this.http.post<any>('rest/pubsub-handler/', message);
  }
}
