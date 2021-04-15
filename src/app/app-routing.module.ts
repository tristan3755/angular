import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GuitaresComponent} from'./guitares/guitares.component'

const routes: Routes = [
  {path:'guitares',component:GuitaresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
