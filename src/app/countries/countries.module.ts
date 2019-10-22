import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { CountryListComponent } from './country-list/country-list.component';
import { CountryListItemComponent } from './country-list-item/country-list-item.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryService } from './country.service';
import { CountryDashboardComponent } from './country-dashboard/country-dashboard.component';

const routes: Routes = [{ path: '', component: CountryDashboardComponent }];

@NgModule({
  declarations: [
    CountryDashboardComponent,
    CountryListComponent,
    CountryListItemComponent,
    CountryDetailComponent
  ],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [CountryDashboardComponent],
  providers: [CountryService],
  bootstrap: []
})
export class CountriesModule {}
