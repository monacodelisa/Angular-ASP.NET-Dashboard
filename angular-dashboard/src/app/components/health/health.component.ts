import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Server } from 'src/app/models/server';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-health',
  standalone: true,
  imports: [ServerComponent],
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {
  http: HttpClient =inject(HttpClient);
  servers: Server[] = [];

  ngOnInit(): void {
    this.http.get<Server[]>("../../assets/servers.json").subscribe(data => {
      this.servers = data;
    });
  }
}
