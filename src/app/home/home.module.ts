import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { MatGridListModule } from '@angular/material/grid-list';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuddyReferralComponent } from './buddy-referral/buddy-referrel.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatGridListModule,
    MatCardModule,
    CoreModule
  ],
  declarations: [
    HomeComponent,
    BuddyReferralComponent,
    DashboardComponent
  ]

})
export class HomeModule { }
