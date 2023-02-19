import {Component, OnInit} from '@angular/core';
import {SensorDataService} from "../../services/sensor-data.service";
import {MatSnackBar} from "@angular/material/snack-bar";

export class SensorMessage {
  message: {
    attributes: {
      [key: string]: string
    },
    data: string,
    messageId: string,
    message_id: string,
    publishTime: string,
    publish_time: string
  };
  subscription: string;

  constructor() {
    this.message = {
      attributes: {
        key: 'value'
      },
      data: '',
      messageId: '',
      message_id: '',
      publishTime: '',
      publish_time: ''
    };
    this.subscription = 'projects/myproject/subscriptions/mysubscription';
  }
}

@Component({
  selector: 'app-sensor-upload',
  templateUrl: './sensor-upload.component.html',
  styleUrls: ['./sensor-upload.component.css']
})
export class SensorUploadComponent {

  messageData: string;
  permission: boolean;
  sensorMessage: SensorMessage;

  constructor(private dataService: SensorDataService, private snackBar: MatSnackBar) {
    this.sensorMessage = new SensorMessage();
    this.permission = false;
    this.messageData = ''
  }

  generateMessageId(): string {
    let str = '';
    for (let i = 0; i < 13; i++) {
      str += Math.floor(Math.random() * 10).toString();
    }
    return str;
  }

  publishMessage(data: any) {
    if (data) {
      this.sensorMessage.message.message_id = this.generateMessageId()
      this.sensorMessage.message.messageId = this.generateMessageId()
      const now = new Date();
      this.sensorMessage.message.publish_time = now.toISOString();
      this.sensorMessage.message.publishTime = now.toISOString();
      this.sensorMessage.message.data = btoa(data)
      this.dataService.postSensorData(this.sensorMessage).subscribe(response => {
        this.snackBar.open(response.message, 'Close', {
          duration: 3000,
        });
      });
    } else {
      this.snackBar.open('Failed, not enough data', 'Close', {
        duration: 3000,
      });
    }
  }
}
