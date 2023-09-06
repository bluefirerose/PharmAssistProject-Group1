import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './category/index/index.component';
import { AboutComponent } from './about/about.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) },
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'category/index', component: IndexComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


