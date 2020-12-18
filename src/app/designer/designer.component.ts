import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styles: [],
})
export class DesignerComponent implements OnInit {
  public firstFormGroup!: FormGroup;
  public interiorFormGroup!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      dataSourceControl: ['', Validators.required],
    });
    this.interiorFormGroup = this.formBuilder.group({
      interiorControl: '',
      viewControl: [],
    });
  }
}
