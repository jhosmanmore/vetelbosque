import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component'
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { Article1Component } from './articles/article1/article1.component';

const routes: Routes = [
  {path: "", title: "Veterinaria El Bosque", component:InicioComponent},
  {path: "about", title: "Vet El Bosque - Quienes somos", component:AboutComponent},
  {path: "contact", title: "Vet El Bosque - Contacto", component:ContactComponent},
  {path: "blog", title: "Vet El Bosque - Blog", component:BlogComponent},
  {path: "blog/post1", title: "Cuidados con la alimentación de tu mascota", component:Article1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
