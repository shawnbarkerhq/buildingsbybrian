import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

const routes: Routes = [
  {
    path: "buildings",
    loadChildren: () =>
      import("./buildings/buildings.module").then(m => m.BuildingsModule)
  },
  {
    path: "countries",
    loadChildren: () =>
      import("./countries/countries.module").then(m => m.CountriesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
