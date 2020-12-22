import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DesignComponent } from '../design/design.component';
import { BrandModelComponent } from './brand-model/brand-model.component';

const routes: Routes = [
  {
    path: '',
    component: DesignComponent,
    pathMatch: 'full',
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
  {
    path: 'brand-model',
    component: BrandModelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignRoutingModule {}
