import { Component, Input } from '@angular/core';
import { Server } from 'src/app/models/server';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent {
  @Input() serverInput!: Server;

}
