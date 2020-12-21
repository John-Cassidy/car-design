import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { M2Component } from './m2.component';

const routes: Routes = [{ path: '', component: M2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class M2RoutingModule {}
