import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';

import { Ng2OrderModule } from 'ng2-order-pipe';

// scroll-top
import {ScrollToModule} from 'ng2-scroll-to';

// directives
import { HighlightDirective } from './directives/highlight';
import { mouseEvent } from './directives/mouse-event';
import { SelectRadio } from './directives/select-radio';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PipesComponent } from './pipes/pipes.component';
import { RepeatLoopComponent } from './repeat-loop/repeat-loop.component';
import { FormValidationsComponent } from './form-validations/form-validations.component';
import { ServiceHttComponent } from './service-htt/service-htt.component';
import { HeroDetailComponent } from './service/details';

import {routing} from './app.routing';
import { LoginValidComponent } from './login-valid/login-valid.component';
import { FilterPipe } from './pipes/filter.pipe';
import { DirectivesComponent } from './directives/directives.component';
import { TabsComponent } from './tabs/tabs.component';
import { FilterRangePipe } from './pipes/filter-range.pipe';
import { ServiceComponent } from './service/service.component';
import { EventsComponent } from './events/events.component';
import { PaginationComponent } from './pagination/pagination.component';
import { EffectiveAnimationComponent } from './effective-animation/effective-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PipesComponent,
    RepeatLoopComponent,
    FormValidationsComponent,
    ServiceHttComponent,
    LoginValidComponent,
    FilterPipe,
    DirectivesComponent,
    HighlightDirective,
    mouseEvent,
    SelectRadio,
    TabsComponent,
    FilterRangePipe,
    ServiceComponent,
    HeroDetailComponent,
    EventsComponent,
    PaginationComponent,
    EffectiveAnimationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    ScrollToModule.forRoot(),
    Ng2OrderModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
