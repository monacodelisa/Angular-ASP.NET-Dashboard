import { Component, Input, OnInit } from '@angular/core';
import { Server } from 'src/app/models/server';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  serverStatus!: boolean;
  severity: string = '';
  buttonText: string = '';

  @Input() serverInput!: Server;

  ngOnInit(): void {
    this.setServerStatus(this.serverInput.isOnline);
  }

  setServerStatus(isOnline: boolean) {
    if (isOnline) {
      this.serverInput.isOnline = true;
      this.severity = 'success';
      this.buttonText = 'Shut Down';
    } else {
      this.serverInput.isOnline = false;
      this.severity = 'danger';
      this.buttonText = 'Start';
    }
  }

  toggleStatus(onlineStatus: boolean) {
    this.setServerStatus(!onlineStatus);
  }
}
