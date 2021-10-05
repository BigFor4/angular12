import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KhoahocComponent } from './khoahoc/khoahoc.component';
import { KiemtraComponent } from './kiemtra/kiemtra.component';
import { LoginComponent } from './login/login.component';
import { PagenotfountComponent } from './pagenotfount/pagenotfount.component';

const routes: Routes = [
  {path:"", component: RouterModule},
  {path:"kiemtra",component: KiemtraComponent},
  {path:"khoahoc",component: KhoahocComponent},
  {path:"login" , component: LoginComponent},
  {path:"**", component: PagenotfountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
