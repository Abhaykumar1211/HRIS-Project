import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

activeNav="";
  
  isHovering = {}as any;

  images = [
    {
      id:'dashboard',
      path: '../../../../assets/dashboard.png',
    },
    {
      id:'folder',
      path: '../../../../assets/folder.png',
    },
    {
      id:'user',
      path: '../../../../assets/user.png',
    },
    {
      id:'leave',
      path: '../../../../assets/leave1.png',
    },
    {
      id:'time',
      path: '../../../../assets/time.png',
    },
    {
      id:'receive',
      path: '../../../../assets/receive.png',
    },
    {
      id:'graph',
      path: '../../../../assets/graph.png',
    },
    {
      id:'security',
      path: '../../../../assets/security.png',
    }
  ];

setActiveNav(id:string){
  this.activeNav=id;
}

  setHoverState(state: boolean, key:string) {
    this.isHovering[key
    ] = state;
  }
}
