import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent} from '../app/formulario/formulario.component';
import { HomeComponent} from '../app/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'formulario', component:FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 