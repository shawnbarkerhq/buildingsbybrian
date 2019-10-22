import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesDashboardComponent } from './cities-dashboard/cities-dashboard.component';
import { CitiesDetailComponent } from './cities-detail/cities-detail.component';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { CitiesListItemComponent } from './cities-list-item/cities-list-item.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CitiesService } from './cities.service';

const routes: Routes = [{ path: '', component: CitiesDashboardComponent }];

@NgModule({
  declarations: [
    CitiesDashboardComponent,
    CitiesDetailComponent,
    CitiesListComponent,
    CitiesListItemComponent
  ],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [CitiesDashboardComponent],
  providers: [CitiesService]
})
export class CitiesModule {}
