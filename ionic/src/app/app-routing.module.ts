import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([{
      path: '',
      canActivate: [ AuthGuard ],
      children: [{
        path: '', pathMatch: 'full', redirectTo: 'home',
      }, {
        path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      }, {
        path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
      }]
    }, {
      path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
    }],
    {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
