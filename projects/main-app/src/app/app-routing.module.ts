import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'skylark-web', loadChildren: () => import('../../../../projects/skylark-web/src/app/app.module').then(m => m.AppModule) },
  { path: 'webadmin', loadChildren: () => import('../../../../projects/webadmin/src/app/app.module').then(m => m.AppModule) },
  { path: 'webshellv2', loadChildren: () => import('../../../../projects/webshellv2/src/app/app.module').then(m => m.AppModule) },
  { path: '', redirectTo: 'webshellv2', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
