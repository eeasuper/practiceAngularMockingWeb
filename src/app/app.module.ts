import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
import {MenuButtonComponent} from './main-navbar/menu-button/menu-button.component';
import { SidenavContainerComponent } from './sidenav-container/sidenav-container.component';
import { SidenavContentComponent } from './sidenav-container/sidenav-content/sidenav-content.component';
import { RightNavComponent } from './right-nav/right-nav.component';
import { RightNavDirective } from './right-nav/right-nav.directive';
import { LisComponent } from './right-nav/lis/lis.component';
import {RightNavService} from './right-nav/right-nav.service'
import {CoreModule} from './core.module'

@NgModule({
  declarations: [
    AppComponent,
    AppSideBarComponent,
    MainNavbarComponent,
    MenuButtonComponent,
    SidenavContainerComponent,
    SidenavContentComponent,
    RightNavComponent,
    RightNavDirective,
    LisComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    HomeModule,
    FeaturesModule,
    DocsModule,
    ResourcesModule,
    EventsModule,
    AppSideBarModule,
    BrowserAnimationsModule,
    // GuideModule
  ],
  providers: [AppSideBarService,RightNavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
