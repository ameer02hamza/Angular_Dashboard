import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HearderComponent } from './dashboard/hearder/hearder.component';
import { SidenavbarComponent } from './dashboard/sidenavbar/sidenavbar.component';

const routes: Routes = [
  // {path:'header',component:HearderComponent},
  {path:'',component:SidenavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
