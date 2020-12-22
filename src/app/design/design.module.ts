import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { BrandModelComponent } from './brand-model/brand-model.component';
import { DesignRoutingModule } from './design-routing.module';
import { DesignComponent } from './design.component';

@NgModule({
  declarations: [DesignComponent, BrandModelComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DesignRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ],
})
export class DesignModule {}
