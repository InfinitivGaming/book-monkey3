import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CanNavigateToAdminGuard } from './can-navigate-to-admin.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'books',
    loadChildren: 'app/book-monkey/iteration-6/guards/books/books.module#BooksModule'
  },
  {
    path: 'admin',
    loadChildren: 'app/book-monkey/iteration-6/guards/admin/admin.module#AdminModule',
    canActivate: [CanNavigateToAdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CanNavigateToAdminGuard]
})
export class AppRoutingModule { }
