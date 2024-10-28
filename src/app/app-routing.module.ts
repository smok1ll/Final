import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tab-inicial',
    loadChildren: () => import('./page/tab-inicial/tab-inicial.module').then( m => m.TabInicialPageModule)
  },
  
  {
    path: 'intro',
    loadChildren: () => import('./page/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'restore',
    loadChildren: () => import('./page/restore/restore.module').then( m => m.RestorePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./page/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page/error/error.module').then( m => m.ErrorPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./page/detail/detail.module').then( m => m.DetailPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
