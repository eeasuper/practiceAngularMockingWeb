import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { FeaturesModule } from './features/features.module';
import { DocsModule } from './docs/docs.module';
import { ResourcesModule } from './resources/resources.module';
import { EventsModule } from './events/events.module';
import { AppSideBarComponent } from './appSideBar/app-side-bar/app-side-bar.component';
import { AppSideBarModule } from './appSideBar/app-side-bar.module';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import {AppSideBarService} from './app-side-bar.service';

@NgModule({
  declarations: [
    AppComponent,
    AppSideBarComponent,
    MainNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FeaturesModule,
    DocsModule,
    ResourcesModule,
    EventsModule,
    AppSideBarModule
  ],
  providers: [AppSideBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
