import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'buildings',
    loadChildren: () =>
      import('./buildings/buildings.module').then(m => m.BuildingsModule)
  },
  {
    path: 'countries',
    loadChildren: () =>
      import('./countries/countries.module').then(m => m.CountriesModule)
  },
  {
    path: 'states',
    loadChildren: () =>
      import('./states/states.module').then(m => m.StatesModule)
  },
  {
    path: 'states',
    loadChildren: () =>
      import('./continents/continents.module').then(m => m.ContinentsModule)
  }
  {
    path: 'cities',
    loadChildren: () =>
      import('./cities/cities.module').then(m => m.CitiesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
