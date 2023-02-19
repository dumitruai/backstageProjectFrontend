import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import {SensorListComponent} from "./components/sensor-list/sensor-list.component";
import {SensorGraphComponent} from "./components/sensor-graph/sensor-graph.component";
import {SensorUploadComponent} from "./components/sensor-upload/sensor-upload.component";


const appRoutes: Routes = [
  {path: 'sensor-data/list', component: SensorListComponent},
  {path: 'sensor-data/graphs', component: SensorGraphComponent},
  {path: 'sensor-data/upload', component: SensorUploadComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ]
})

export class AppRoutingModule {
}
