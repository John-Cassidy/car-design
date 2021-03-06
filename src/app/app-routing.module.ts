import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'designer',
    loadChildren: () =>
      import('./designer/designer.module').then((m) => m.DesignerModule),
  },
  {
    path: 'design',
    loadChildren: () => import('./design/design.module').then((m) => m.DesignModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
