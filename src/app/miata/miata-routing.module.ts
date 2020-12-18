import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MiataComponent } from './miata.component';

const routes: Routes = [
  {
    path: '',
    component: MiataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiataRoutingModule {}
