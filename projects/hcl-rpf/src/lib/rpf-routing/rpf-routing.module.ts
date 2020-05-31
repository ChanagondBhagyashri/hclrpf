import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmptyRouteComponent } from "../empty-route/empty-route.component";
import { RPFGuardServiceGuard } from "../services/rpfguard-service.guard";
const routes: Routes = [
  {
    path: "",
    data: {
      pfeParent: true
    },
    children: [
      {
        // Needed to make the angular compiler happy
        component: EmptyRouteComponent,
        path: "**",
        canActivate: [RPFGuardServiceGuard]
      }
    ]
  }
];

@NgModule({
  declarations: [EmptyRouteComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RpfRoutingModule {}
