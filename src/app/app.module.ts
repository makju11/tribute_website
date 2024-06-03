
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LovedonesComponent } from './lovedones/lovedones.component';
import { PetsComponent } from './pets/pets.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationModule } from './pagination/pagination.module';
import { LovedonesModule } from './lovedones/lovedones.module';
import { PetsModule } from './pets/pets.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrontpageComponent,
    AboutComponent,
    ContactComponent,
  

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginationModule,
    LovedonesModule,
    PetsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
