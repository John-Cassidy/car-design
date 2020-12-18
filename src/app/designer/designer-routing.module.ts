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
        outlet: 'interior',
        loadChildren: () => import('../miata/miata.module').then((m) => m.MiataModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignerRoutingModule {}
