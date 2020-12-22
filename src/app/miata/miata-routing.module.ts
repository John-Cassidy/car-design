import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExteriorComponent } from './exterior/exterior.component';
import { InteriorComponent } from './interior/interior.component';
import { MiataComponent } from './miata.component';

const routes: Routes = [
  { path: '', component: MiataComponent, pathMatch: 'full' },
  { path: 'interior', component: InteriorComponent },
  { path: 'exterior', component: ExteriorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiataRoutingModule {}
