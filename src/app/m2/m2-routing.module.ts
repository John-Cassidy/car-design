import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExteriorComponent } from './exterior/exterior.component';
import { InteriorComponent } from './interior/interior.component';
import { M2Component } from './m2.component';

const routes: Routes = [
  { path: '', component: M2Component, pathMatch: 'full' },
  { path: 'interior', component: InteriorComponent },
  { path: 'exterior', component: ExteriorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class M2RoutingModule {}
