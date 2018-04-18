import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-input',
  template: `
    <div [formGroup]="group">
      <label>{{ config.label }}</label>
      <input [type]="config.type" [attr.placeholder]="config.placeholder" [formControlName]="config.name"/>
    </div>
  `,
})
export class FormInputComponent {
  config;
  group: FormGroup;
}