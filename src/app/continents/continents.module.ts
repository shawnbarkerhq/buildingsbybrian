import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContinentsDashboardComponent } from './continents-dashboard/continents-dashboard.component';
import { ContinentsDetailComponent } from './continents-detail/continents-detail.component';
import { ContinentsListComponent } from './continents-list/continents-list.component';
import { ContinentsListItemComponent } from './continents-list-item/continents-list-item.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ContinentsService } from './continents.service';

const routes: Routes = [{ path: '', component: ContinentsDashboardComponent }];

@NgModule({
  declarations: [
    ContinentsDashboardComponent,
    ContinentsDetailComponent,
    ContinentsListComponent,
    ContinentsListItemComponent
  ],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [ContinentsDashboardComponent],
  providers: [ContinentsService]
})
export class ContinentsModule {}
