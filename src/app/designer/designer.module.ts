import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { DesignerRoutingModule } from './designer-routing.module';
import { DesignerComponent } from './designer.component';
import { ExteriorComponent } from './exterior/exterior.component';
import { InteriorComponent } from './interior/interior.component';

@NgModule({
  declarations: [DesignerComponent, InteriorComponent, ExteriorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DesignerRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ],
})
export class DesignerModule {}
