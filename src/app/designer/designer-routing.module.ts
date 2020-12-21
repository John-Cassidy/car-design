import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DesignerComponent } from './designer.component';

const routes: Routes = [
  {
    path: '',
    component: DesignerComponent,
    children: [
      {
        path: 'miata',
        loadChildren: () => import('../miata/miata.module').then((m) => m.MiataModule),
      },
      {
        path: 'm2',
        loadChildren: () => import('../m2/m2.module').then((m) => m.M2Module),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignerRoutingModule {}
