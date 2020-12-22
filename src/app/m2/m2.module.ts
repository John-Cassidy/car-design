import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExteriorComponent } from './exterior/exterior.component';
import { InteriorComponent } from './interior/interior.component';
import { M2RoutingModule } from './m2-routing.module';
import { M2Component } from './m2.component';

@NgModule({
  declarations: [M2Component, InteriorComponent, ExteriorComponent],
  imports: [CommonModule, M2RoutingModule],
})
export class M2Module {}
