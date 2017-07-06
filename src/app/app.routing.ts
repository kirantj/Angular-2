import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {PipesComponent} from './pipes/pipes.component';
import {RepeatLoopComponent} from './repeat-loop/repeat-loop.component';
import {ServiceHttComponent} from './service-htt/service-htt.component';
import {LoginValidComponent} from './login-valid/login-valid.component';
import {FormValidationsComponent} from './form-validations/form-validations.component';
import {EffectiveAnimationComponent} from './effective-animation/effective-animation.component';
import {DirectivesComponent} from './directives/directives.component';
import {TabsComponent} from './tabs/tabs.component';
import {ServiceComponent} from './service/service.component';
import {EventsComponent} from './events/events.component';
import {PaginationComponent} from './pagination/pagination.component';



const appRoutes: Routes = [
        {
            path:'',
            component: HomeComponent
        },
        {
            path: 'app-pipes',
            component: PipesComponent
        },
        {
            path: 'app-repeat-loop',
            component: RepeatLoopComponent
        },
        {
            path: 'app-service-htt',
            component: ServiceHttComponent
        },
        {
            path: 'app-login-valid',
            component: LoginValidComponent
        },
        {
            path: 'app-form-validations',
            component: FormValidationsComponent
        },
        {
            path: 'app-effective-animation',
            component: EffectiveAnimationComponent
        },
        {
            path: 'app-directives',
            component: DirectivesComponent
        },
        {
            path: 'app-tabs',
            component: TabsComponent
        },
        {
            path: 'app-service',
            component: ServiceComponent
        },
        {
            path: 'app-events',
            component: EventsComponent
        },
        {
            path: 'app-pagination',
            component: PaginationComponent
        },

        // otherwise redirect to home
        {
             path: '**',
             redirectTo: ''
        }

];

export const routing: ModuleWithProviders= RouterModule.forRoot(appRoutes);
