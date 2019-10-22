import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatesDashboardComponent } from './states-dashboard/states-dashboard.component';
import { StatesDetailComponent } from './states-detail/states-detail.component';
import { StatesListComponent } from './states-list/states-list.component';
import { StatesListItemComponent } from './states-list-item/states-list-item.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { StatesService } from './states.service';

const routes: Routes = [{ path: '', component: StatesDashboardComponent }];

@NgModule({
  declarations: [
    StatesDashboardComponent,
    StatesDetailComponent,
    StatesListComponent,
    StatesListItemComponent
  ],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [StatesDashboardComponent],
  providers: [StatesService]
})
export class StatesModule {}
