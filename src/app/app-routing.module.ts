import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepartmentComponent} from "./department/department.component";
import {FruitsComponent} from "./fruits/fruits.component";

const routes: Routes = [
  {path: "fruits", component: FruitsComponent},
  {path: "department", component: DepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
