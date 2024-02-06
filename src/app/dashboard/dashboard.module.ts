import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
// import { ChartsModule as chartjsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { GaugeModule } from 'angular-gauge';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ComponentsModule } from '../shared/components/components.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [MainComponent, Dashboard2Component, Dashboard3Component],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatMenuModule,
    // chartjsModule,
    MatIconModule,
    MatButtonModule,
    // PerfectScrollbarModule,
    // NgApexchartsModule,
    // NgxEchartsModule.forRoot({
    //   echarts: () => import('echarts')
    // }),
    // GaugeModule.forRoot(),
    ComponentsModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule {}
