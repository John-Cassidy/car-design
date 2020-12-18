import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MiataRoutingModule } from './miata-routing.module';
import { MiataComponent } from './miata.component';

@NgModule({
  declarations: [MiataComponent],
  imports: [CommonModule, MiataRoutingModule],
})
export class MiataModule {}
