import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExteriorComponent } from './exterior/exterior.component';
import { InteriorComponent } from './interior/interior.component';
import { MiataRoutingModule } from './miata-routing.module';
import { MiataComponent } from './miata.component';

@NgModule({
  declarations: [MiataComponent, InteriorComponent, ExteriorComponent],
  imports: [CommonModule, MiataRoutingModule],
})
export class MiataModule {}
