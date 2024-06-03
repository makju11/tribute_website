import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LovedonesComponent } from './lovedones/lovedones.component';
import { PetsComponent } from './pets/pets.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component:FrontpageComponent }, 
  { path: 'lovedone', component:LovedonesComponent},
  { path: 'pets', component:PetsComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
