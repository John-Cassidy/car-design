import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DesignerRoutingModule } from './designer-routing.module';
import { DesignerComponent } from './designer.component';

@NgModule({
  declarations: [DesignerComponent],
  imports: [CommonModule, DesignerRoutingModule],
})
export class DesignerModule {}
