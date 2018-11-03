import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewValue = false;
  serverCreationStatus = 'No Server was created';
  serverName = 'test';

  constructor() { 
    setTimeout(() => {
      this.allowNewValue = true;
    },2000)
  }

  ngOnInit() {
  }
  
  onCreateServer(){
    this.serverCreationStatus = 'Server was created . Name is '+this.serverName;
  }
  
  onUpdateServer(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
