import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './modules/main/main.component';
import { AboutComponent } from './modules/about/about.component';
import { ModelsComponent } from './modules/models/models.component';
import { TestimonialsComponent } from './modules/testimonials/testimonials.component';
import { TeamComponent } from './modules/team/team.component';
import { ContactComponent } from './modules/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    ModelsComponent,
    TestimonialsComponent,
    TeamComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
