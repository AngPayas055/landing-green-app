import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/main/main.component';
import { AboutComponent } from './modules/about/about.component';
import { ModelsComponent } from './modules/models/models.component';
import { TestimonialsComponent } from './modules/testimonials/testimonials.component';
import { TeamComponent } from './modules/team/team.component';
import { ContactComponent } from './modules/contact/contact.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'models', component: ModelsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
