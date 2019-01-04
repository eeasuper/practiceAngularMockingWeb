import { Component, OnInit } from '@angular/core';
import {Router,NavigationEnd,ActivatedRoute} from '@angular/router';
import {AppSideBarService} from "../../app-side-bar.service";

@Component({
  selector: 'app-side-bar',
  templateUrl: './app-side-bar.component.html',
  styleUrls: ['./app-side-bar.component.css']
})
export class AppSideBarComponent implements OnInit {

  constructor(private sidebarService:AppSideBarService) {
  }

  ngOnInit() {
  }

}
