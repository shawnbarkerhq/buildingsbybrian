import { NgModule } from "@angular/core";
import { BuildingsDashboardComponent } from "./buildings-dashboard/buildings-dashboard.component";
import { BuildingsDetailComponent } from "./buildings-detail/buildings-detail.component";
import { BuildingsListComponent } from "./buildings-list/buildings-list.component";
import { BuildingsListItemComponent } from "./buildings-list-item/buildings-list-item.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { BuildingsService } from "./buildings.service";

const routes: Routes = [{ path: "", component: BuildingsDashboardComponent }];

@NgModule({
  declarations: [
    BuildingsDashboardComponent,
    BuildingsDetailComponent,
    BuildingsListComponent,
    BuildingsListItemComponent
  ],
  imports: [SharedModule, RouterModule.forChild(routes)],
  providers: [BuildingsService]
})
export class BuildingsModule {}
