import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { M2RoutingModule } from './m2-routing.module';
import { M2Component } from './m2.component';

@NgModule({
  declarations: [M2Component],
  imports: [CommonModule, M2RoutingModule],
})
export class M2Module {}
