import { Component, OnInit } from '@angular/core';
import {AppSideBarComponent} from '../appSideBar/app-side-bar/app-side-bar.component';
import {SidenavContentComponent} from './sidenav-content/sidenav-content.component';

@Component({
  selector: 'app-sidenav-container',
  templateUrl: './sidenav-container.component.html',
  styleUrls: ['./sidenav-container.component.css']
})
export class SidenavContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
